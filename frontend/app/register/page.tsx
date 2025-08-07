"use client"

import { useState } from "react"

export default function RegisterPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    edad: "",
    sexo: "",
    altura: "",
    peso: "",
    objetivo: "",
    actividad: "",
    deportes: ""
  })
  const [mensaje, setMensaje] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      setForm({
        nombre: "", email: "", password: "", edad: "", sexo: "", altura: "", peso: "", objetivo: "", actividad: "", deportes: ""
      })
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

        <input
          type="number"
          name="edad"
          value={form.edad}
          onChange={handleChange}
          placeholder="Edad"
          min={0}
          max={150}
          required
          className="p-3 rounded"
        />

        <select name="sexo" value={form.sexo} onChange={handleChange} required className="p-3 rounded">
          <option value="">Selecciona tu sexo</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>

        <input
          type="number"
          name="altura"
          value={form.altura}
          onChange={handleChange}
          placeholder="Altura en cm"
          min={50}
          max={250}
          step="0.1"
          required
          className="p-3 rounded"
        />

        <input
          type="number"
          name="peso"
          value={form.peso}
          onChange={handleChange}
          placeholder="Peso en kg"
          min={10}
          max={300}
          step="0.1"
          required
          className="p-3 rounded"
        />

        <input name="objetivo" value={form.objetivo} onChange={handleChange} placeholder="Objetivo personal" required className="p-3 rounded" />

        <select name="actividad" value={form.actividad} onChange={handleChange} required className="p-3 rounded">
          <option value="">Nivel de actividad física</option>
          <option value="bajo">Bajo</option>
          <option value="medio">Medio</option>
          <option value="alto">Alto</option>
        </select>

        <input name="deportes" value={form.deportes} onChange={handleChange} placeholder="Preferencias en deporte" required className="p-3 rounded" />

        <button type="submit" className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-purple-700 transition">
          Registrarse
        </button>

        {mensaje && <p className="text-center text-sm mt-2">{mensaje}</p>}
      </form>
    </main>
  )
}
