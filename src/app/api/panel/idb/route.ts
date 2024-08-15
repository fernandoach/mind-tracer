import { connection, disconnect } from "@/models/connection";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import userModel from "@/models/schemas/userSchema";
import dotenv from "dotenv";
import idbModel from "@/models/schemas/idbModel";

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

    await connection();
    const user = await userModel.findOne({ email });
    await disconnect();
    console.log(user)
    if (!user) throw new Error("Usted no esta autenticado.");

    await connection();
    const idbData = await idbModel.findOne({ user }) || await idbModel.create({ user, respuesta: [], total: 0, clasificacion: 0 });
    await disconnect();
    console.log(idbData)
    if (!idbData) throw new Error("No se encontró el test.");

    const respuestas = idbData.respuesta.length

    return NextResponse.json({ respuestas});
  } catch (error: any) {
    console.log(error)
    return NextResponse.json(
      {
        statusCode: 401,
        message: error.message,
      },
      { status: 401 }
    );
  }
}
