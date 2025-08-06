// frontend/app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-purple-600 to-purple-700 text-white py-20 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-4">CorIA</h1>
        <p className="text-xl max-w-2xl mx-auto mb-6">Tu corazón, tu camino, tu IA</p>
        <a
          href="/register"
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          Empieza ahora
        </a>
      </section>

      {/* ¿Qué es CorIA? */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">¿Qué es CorIA?</h2>
        <p className="text-lg text-gray-700 mb-10">
          CorIA es una comunidad en la que se combina tecnologia con IA y el deporte para crear habitos saludables. Nos ayudamos entre todos a entrenar, comer mejor y mantenernos motivados.
        </p>
      </section>

      {/* Beneficios */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">💪 Rutinas Personalizadas</h3>
            <p className="text-gray-600">Entrena según tu nivel, tus objetivos y tu ritmo de vida.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">🥗 Alimentación Inteligente</h3>
            <p className="text-gray-600">Menús adaptados y recetas saludables que se ajustan a ti.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">🧠 Motivación Constante</h3>
            <p className="text-gray-600">Sigue tu progreso, recibe frases motivadoras y no pares.</p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 px-6 text-center bg-indigo-50">
        <h2 className="text-3xl font-bold mb-4">Únete a la comunidad CorIA</h2>
        <p className="text-lg text-gray-700 mb-6">Empieza a construir tu mejor versión con ayuda de la tecnología y un entorno positivo.</p>
        <a
          href="https://www.instagram.com/coria_oficial?igsh=MmR0cmp1N3BjZWc1"
          className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          Instagram
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © 2025 CorIA — Salud, IA y Comunidad con propósito.
      </footer>
    </main>
  )
}
