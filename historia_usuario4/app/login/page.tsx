"use client";
import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok && data.user) {
        localStorage.setItem("userId", data.user.id);
        window.location.href = "/";
      } else {
        setError(data.error || "Error al iniciar sesión");
      }
    } catch (err) {
      setError("Error de red, inténtalo de nuevo");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-950">
      <Card title="Bienvenido" description="Inicia sesión en tu cuenta">
        <form onSubmit={handleLogin} className="space-y-4">
          <Input 
            id="email" 
            label="Email" 
            type="email" 
            placeholder="usuario@ejemplo.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <Input 
            id="password" 
            label="Contraseña" 
            type="password" 
            placeholder="••••••••" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <Button type="submit">Iniciar Sesión</Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          ¿No tienes una cuenta? <Link href="/register" className="text-blue-600 hover:underline">Regístrate aquí</Link>
        </p>
      </Card>
    </div>
  );
}