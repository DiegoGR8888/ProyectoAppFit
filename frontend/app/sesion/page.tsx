"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ email: "", nombre: "", password: "" })
  const [mensaje, setMensaje] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch("http://localhost:3001/api/sesion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      const data = await res.json()
      setMensaje("✅ Inicio de sesión exitoso")
      // Puedes guardar el usuario en localStorage, cookies o contexto si quieres
      // Aquí redirigimos directamente
      router.push("/perfil")
    } else {
      setMensaje("❌ Usuario o contraseña incorrectos")
    }
  }

  return (
    <main className="min-h-screen py-10 px-6 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Iniciar sesión en CorIA</h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto grid gap-4 bg-gray-100 p-6 rounded-xl shadow">
        <input name="email" value={form.email} onChange={handleChange} placeholder="Correo electrónico" className="p-3 rounded" />
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre de usuario" className="p-3 rounded" />
        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Contraseña" className="p-3 rounded" required />

        <button type="submit" className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-purple-700 transition">
          Iniciar sesión
        </button>

        {mensaje && <p className="text-center text-sm mt-2">{mensaje}</p>}
      </form>
    </main>
  )
}
