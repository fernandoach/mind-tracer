import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST() {
    try {
        await signOut();
    }catch (error) {
        return NextResponse.json(
            { message: "Error al cerrar sesión." },
            { status: 400 }
        );
    }
}