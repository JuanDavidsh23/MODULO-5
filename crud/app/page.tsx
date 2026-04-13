
"use client"; 
import { useEffect, useState } from 'react';

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');

  const cargarUsuarios = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsuarios(data);
  };

  const agregarUsuario = async () => {
    if (!nombre.trim()) return;
    await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre }),
    });
    setNombre('');
    cargarUsuarios(); 
  };

  const eliminarUsuario = async (id: number) => {
    if (confirm("¿Seguro que quieres eliminar este empleado?")) {
      await fetch(`/api/users?id=${id}`, {
        method: 'DELETE',
      });
      cargarUsuarios();
    }
  };

  const editarUsuario = async (id: number, nombreActual: string) => {
    const nuevoNombre = prompt("Editar nombre del empleado:", nombreActual);
    if (nuevoNombre && nuevoNombre.trim() !== nombreActual) {
      await fetch('/api/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, nombre: nuevoNombre.trim() }),
      });
      cargarUsuarios();
    }
  };

  useEffect(() => { cargarUsuarios(); }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Staff del Restaurante</h1>
      
      <div style={{ marginBottom: '1rem' }}>
        <input 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre del nuevo empleado"
          style={{ marginRight: '0.5rem', padding: '0.25rem' }}
        />
        <button onClick={agregarUsuario} style={{ padding: '0.25rem 0.5rem' }}>Agregar</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {usuarios.map((u: any) => (
          <li key={u.id} style={{ marginBottom: '0.5rem', background: '#f0f0f0', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
            <span style={{ flexGrow: 1 }}>{u.nombre}</span>
            <button onClick={() => editarUsuario(u.id, u.nombre)} style={{ marginRight: '0.5rem', cursor: 'pointer' }}>Editar</button>
            <button onClick={() => eliminarUsuario(u.id)} style={{ cursor: 'pointer', color: 'red' }}>Eliminar</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
