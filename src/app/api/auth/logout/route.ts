import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { connection, disconnect } from "@/models/connection";
import userModel from "@/models/schemas/userSchema";
import { cookies } from "next/headers";

dotenv.config();

export function POST(request: NextRequest) {
  const authCookie = cookies().get("Auth-Cookie");

  // Verificar si el cookie de autenticación existe
  if (!authCookie) {
    return NextResponse.json(
      { statusCode: 401, message: "Usted no está autenticado." },
      { status: 401 }
    );
  }

  try {
    
    cookies().delete("Auth-Cookie");

    return NextResponse.json({ message: "Éxito al cerrar sesión." });
    
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
