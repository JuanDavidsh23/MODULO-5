"use client";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

type Producto = {
  id: string;
  nombre: string;
  precio: number;
};

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState("");

  const cargarProductos = async (uid: string) => {
    try {
      const res = await fetch(`/api/products?userId=${uid}`);
      const data = await res.json();
      if (res.ok) {
        setProductos(data.products || []);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");

    if (!storedUserId) {
      window.location.href = "/login";
    } else {
      setUserId(storedUserId);
      cargarProductos(storedUserId).then(() => setLoading(false));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    window.location.href = "/login";
  };

  const handleCrearProducto = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombreProducto || !precioProducto || !userId) return;

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify({ nombre: nombreProducto, precio: precioProducto, userId }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setNombreProducto("");
        setPrecioProducto("");
        cargarProductos(userId); 
      }
    } catch (error) {
      console.error("Error creando producto", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <p className="text-gray-500">Cargando tu sesión...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Panel de Control
          </h1>
          <Button variant="danger" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div>
            <Card title="Añadir Producto" description="Regístralo en tu inventario">
              <form onSubmit={handleCrearProducto} className="space-y-4">
                <Input 
                  id="nombre" 
                  label="Nombre del Producto" 
                  placeholder="Ej. Teclado Mecánico" 
                  value={nombreProducto}
                  onChange={(e) => setNombreProducto(e.target.value)} 
                  required 
                />
                <Input 
                  id="precio" 
                  label="Precio ($)" 
                  type="number" 
                  step="0.01"
                  placeholder="0.00" 
                  value={precioProducto}
                  onChange={(e) => setPrecioProducto(e.target.value)} 
                  required 
                />
                <Button type="submit" className="w-full">
                  Guardar Producto
                </Button>
              </form>
            </Card>
          </div>


          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Tus Productos</h2>
            {productos.length === 0 ? (
              <p className="text-gray-500 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                Todavía no has creado ningún producto.
              </p>
            ) : (
              <div className="space-y-3">
                {productos.map((prod) => (
                  <div key={prod.id} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 flex justify-between items-center transition-all hover:shadow-md">
                    <span className="font-medium text-gray-800 dark:text-gray-200">{prod.nombre}</span>
                    <span className="text-green-600 dark:text-green-400 font-bold">${prod.precio}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}