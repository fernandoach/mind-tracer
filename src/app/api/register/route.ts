import { connection, disconnect } from "@/models/connection";
import userModel from "@/models/schemas/userSchema";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";
import userRegisterSchema from "@/zod/userRegisterSchema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { fullName, gender, age, grade, email, password, rePassword } = body;
    const nAge = Number(age);
    const nGrade = Number(grade);

    if (password !== rePassword) {
      return NextResponse.json({ message: "Las contraseñas no coinciden." });
    }

    const data = {
      fullName,
      gender,
      age: nAge,
      grade: nGrade,
      email,
      password,
      rePassword,
    };

    await userRegisterSchema.parseAsync(data);

    const newPassword = await bcrypt.hash(password, 12);

    await connection();

    const newUser = new userModel({
      fullName,
      gender,
      age: nAge,
      grade: nGrade,
      email,
      password: newPassword,
    });

    await newUser.save();

    await disconnect();

    return NextResponse.json({
      message: "Usuario registrado con éxito.",
      userId: newUser.userId,
    });
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json(
        { message: "El correo electrónico ya esta registrado." },
        { status: 409 }
      );
    }
    return NextResponse.json(
      {
        statusCode: 400,
        message: error.issues[0].message,
      },
      { status: 400 }
    );
  }
}
