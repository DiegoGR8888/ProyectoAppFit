"use client"

import { useState } from "react"

export default function RegisterPage() {
  const [form, setForm] = useState({ nombre: "", email: "", edad: "", objetivo: "", sexo: "", altura: "", actividad: "", deportes: "", password: "", peso: ""})
  const [mensaje, setMensaje] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("http://localhost:3001/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setMensaje("✅ Registro exitoso")
      setForm({ nombre: "", email: "", edad: "", objetivo: "", sexo: "", altura: "", actividad: "", deportes: "", password: "", peso: "" })
    } else {
      setMensaje("❌ Error al registrar")
    }
  }

  return (
    <main className="min-h-screen py-10 px-6 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Registro en CorIA</h1>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4 bg-gray-100 p-6 rounded-xl shadow">
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" required className="p-3 rounded" />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Correo electrónico" required className="p-3 rounded" />
        <input name="password" value={form.password} onChange={handleChange} placeholder="Contraseña" required className="p-3 rounded" />
        <input type="number" name="edad" value={form.edad} onChange={handleChange} placeholder="Edad" required className="p-3 rounded" />
        <input name="sexo" value={form.sexo} onChange={handleChange} placeholder="Sexo" required className="p-3 rounded" />
        <input name="altura" value={form.altura} onChange={handleChange} placeholder="Altura" required className="p-3 rounded" />
        <input name="peso" value={form.peso} onChange={handleChange} placeholder="Peso" required className="p-3 rounded" />
        <input name="objetivo" value={form.objetivo} onChange={handleChange} placeholder="Objetivo personal" required className="p-3 rounded" />
        <input name="actividad" value={form.actividad} onChange={handleChange} placeholder="Nivel de actividad" required className="p-3 rounded" />
        <input name="deportes" value={form.deportes} onChange={handleChange} placeholder="Preferencias en deporte" required className="p-3 rounded" />


        <button type="submit" className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-purple-700 transition">
          Registrarse
        </button>

        {mensaje && <p className="text-center text-sm mt-2">{mensaje}</p>}
      </form>
    </main>
  )
}
