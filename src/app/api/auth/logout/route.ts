import { NextRequest, NextResponse } from "next/server";
import dotenv from "dotenv";
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
