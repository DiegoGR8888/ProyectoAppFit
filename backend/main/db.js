const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "users.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) return console.error("❌ Error al conectar con SQLite:", err.message);
  console.log("✅ Conectado a la base de datos SQLite.");
});

// Crear tabla si no existe
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT UNIQUE,
    email TEXT UNIQUE,
    password TEXT,
    edad INTEGER,
    sexo TEXT,
    altura INTEGER,
    peso INTEGER,
    objetivo TEXT,
    actividad TEXT,
    deportes TEXT
  )
`);

module.exports = db;
