import { NextResponse } from "next/server";

let users = [
    {id:1, nombre: "juan"},
    {id:2, nombre: "maria"}
]

export async function GET(){
    return NextResponse.json(users)
}

export async function POST(req: Request){
    const data = await req.json()
    const newUser = {id: Date.now(), ...data}
    users.push(newUser)
    return NextResponse.json(newUser, {status: 200})
}

export async function PUT(req: Request){
    const data = await req.json();
    const { id, nombre } = data;
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        users[index].nombre = nombre;
        return NextResponse.json(users[index]);
    }
    return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
}

export async function DELETE(req: Request){
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get('id'));
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        const deletedUser = users.splice(index, 1);
        return NextResponse.json(deletedUser[0]);
    }
    return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
}