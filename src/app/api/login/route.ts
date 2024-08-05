import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
      const body = await request.json();
      await signIn('credentials', {email: body.email, password: body.password})
      return NextResponse.json({
        message: "Usuario logeado con éxito.",
      })
    }catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return NextResponse.json(
              { message: "Usuario y/o contraseña incorrectos." },
              { status: 401 }
            );
          default:
            return NextResponse.json({
              statusCode: 401,
              message: "Usuario y/o contraseña incorrectos."
            },
            { status: 400 });
        }
      }
      throw error;
    }
}
