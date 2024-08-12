import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { connection, disconnect } from "@/models/connection";
import userModel from "@/models/schemas/userSchema";
import { cookies } from "next/headers";

dotenv.config();

export async function POST(request: NextRequest) {
  const authCookie = cookies().get("Auth-Cookie");

  // Verificar si el cookie de autenticación existe
  if (!authCookie) {
    return NextResponse.json("")
  }

  const secretJwtKey = process.env.AUTH_SECRET;

  try {
    const { email, role, fullName } = jwt.verify(authCookie.value, String(secretJwtKey)) as { email: string, role: string, fullName: string };

    if (!email || !role || !fullName) throw new Error("Usted no esta autenticado.");

    // validation email exists
    await connection();
    const user = userModel.findOne({ email });
    await disconnect();
    if (!user) throw new Error("Usted no esta autenticado.");

    return NextResponse.json({ email, role, fullName });
    
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
