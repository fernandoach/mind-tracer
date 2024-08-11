import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { serialize } from "cookie";
import userLoginSchema from "@/zod/userLoginSchema";
import { connection, disconnect } from "@/models/connection";
import userModel from "@/models/schemas/userSchema";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";

dotenv.config();

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      throw new Error("Falta algun campo.");
    }

    // zod validation
    await userLoginSchema.parseAsync({ email, password });

    // validation email exists
    await connection();
    const user = await userModel.findOne({ email });
    await disconnect();
    if (!user) throw new Error("Usuario y/o contraseña incorrectos");

    // password match
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) throw new Error("Usuario y/o contraseña incorrectos");

    //generate token and cookie
    const secretJwtKey = process.env.AUTH_SECRET;

    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, //token valido por 30 dias
        email,
        role: user.role,
        fullName: user.fullName,
      },
      String(secretJwtKey)
    );

    const serialized = serialize("Auth-Cookie", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 30, //30 dias
      path: "/",
    });

    console.log(serialized)

    const response = NextResponse.json({ message: "Éxito al iniciar sesión." });
    response.headers.append("Set-Cookie", serialized);

    return response
  } catch (error: any) {
    return NextResponse.json(
      {
        statusCode: 401,
        message: error.message,
      },
      { status: 401 }
    );
  }
}
