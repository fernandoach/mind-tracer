import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

interface UserPayload extends JwtPayload {
  userId: string;
  role: string;
}

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  const protectedRoutes = ["/admin", "panel"];

  if (protectedRoutes.some(route => request.nextUrl.pathname === (route))) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const secretKey = String(process.env.secretJWT);
    const user = jwt.verify(String(token), secretKey) as UserPayload;

    // Permitir acceso a usuarios normales
    if (user && user.role === "user") {
      return NextResponse.next();
    }

    // Redirigir a la página de acceso no autorizado si el usuario no es admin
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }
}