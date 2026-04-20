import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email y password son requeridos" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.usuario.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Este correo electrónico ya está registrado." },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const defaultName = email.split("@")[0];

    const newUser = await prisma.usuario.create({
      data: {
        email,
        password: hashedPassword,
        nombre: defaultName,
      },
    });

    return NextResponse.json({
      message: "Usuario registrado",
      user: { id: newUser.id, email: newUser.email, nombre: newUser.nombre },
    });
  } catch (err) {
    console.error("Error en registro:", err);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}