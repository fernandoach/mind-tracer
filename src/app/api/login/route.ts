import userLoginSchema from "@/zod/userLoginSchema";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { connection, disconnect } from "@/models/connection";
import userModel from "@/models/schemas/userSchema";
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers";
import { ZodError } from "zod";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
    
        const { email, password } = body;
    
        const data = {
          email,
          password
        };
        
        await userLoginSchema.parseAsync(data);
        
        await connection();

        const user = await userModel.findOne({ email });

        if(!user){
            throw new Error("Usuario y/o contraseña incorrectos.");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        const secretKey = String(process.env.secretJWT);
        if(!passwordMatch){
            throw new Error("Usuario y/o contraseña incorrectos.");
        }

        await disconnect();
    
        const token = jwt.sign(
            {
            userId: user.userId,
            role: user.role,
            }, 
            secretKey,
            {
                expiresIn: '2h',
            }
        );

        const cookiesStored = cookies();
        cookiesStored.set('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 7200
        });
        
        return NextResponse.json({
            message: "Usuario logeado con éxito.",
        })

      } catch (error: any) {
        return NextResponse.json({
          statusCode: 400,
          message: "Usuario y/o contraseña incorrectos."
        },
        { status: 400 });
      }
}
