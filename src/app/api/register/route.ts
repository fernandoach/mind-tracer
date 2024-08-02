import { connection, disconnect } from "@/models/connection"
import userModel from "@/models/schemas/userSchema"
import { NextResponse, NextRequest } from "next/server"

export async function POST(request: NextRequest){
    try {
        const body = await request.json()


        const { fullName, gender, age, grade, email, password, rePassword } = body
        
        if(password !== rePassword){
            return NextResponse.json({message: "Passwords do not match"})
        }

        console.log(body)

        await connection()

        const newUser = new userModel({
            fullName, gender, age, grade, email, password
        })

        await newUser.save()

        await disconnect()

        return NextResponse.json({message: "User registered successfully", userId: newUser.userId})

    } catch (error: any) {
        if (error.code === 11000) { // Código de error para duplicados
            return NextResponse.json({ message: "Email already exists" }, { status: 409 });
        }
        return NextResponse.json(error)
    }
}