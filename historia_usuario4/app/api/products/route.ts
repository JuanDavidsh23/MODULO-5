import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET de todos los productos de un usuario
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "Falta userId" }, { status: 400 });
    }

    const products = await prisma.producto.findMany({
      where: { usuarioId: userId },
    });

    return NextResponse.json({ products });
  } catch (error) {
    console.error("GET productos error:", error);
    return NextResponse.json({ error: "Error de servidor" }, { status: 500 });
  }
}

// POST para crear un producto
export async function POST(req: Request) {
  try {
    const { nombre, precio, userId } = await req.json();

    if (!nombre || !precio || !userId) {
      return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
    }

    const newProduct = await prisma.producto.create({
      data: {
        nombre,
        precio: parseFloat(precio),
        usuarioId: userId,
      },
    });

    return NextResponse.json({ product: newProduct });
  } catch (error) {
    console.error("POST productos error:", error);
    return NextResponse.json({ error: "Error de servidor" }, { status: 500 });
  }
}
