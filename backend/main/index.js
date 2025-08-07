const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors({
  origin: "http://localhost:3000", // o tu dominio real
  credentials: true
}));
app.use(express.json());

const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

// Ruta para guardar datos del formulario (registro)
app.post("/api/register", async (req, res) => {
  const { nombre, email, password, edad, sexo, altura, peso, objetivo, actividad, deportes } = req.body;

  try {
    // Cifrar la contraseña
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const sql = `INSERT INTO users (nombre, email, password, edad, sexo, altura, peso, objetivo, actividad, deportes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const params = [nombre, email, hashedPassword, edad, sexo, altura, peso, objetivo, actividad, deportes];

    db.run(sql, params, function (err) {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Error al guardar usuario." });
      }
      res.status(201).json({ success: true, id: this.lastID });
    });
  } catch (err) {
    console.error("❌ Error al cifrar contraseña:", err);
    res.status(500).json({ error: "Error interno." });
  }
});


//Ruta para iniciar sesion
app.post("/api/sesion", (req, res) => {
  const { email, nombre, password } = req.body;

  const sql = `SELECT * FROM users WHERE email = ? OR nombre = ?`;
  const params = [email, nombre];

  db.get(sql, params, async (err, user) => {
    if (err) {
      console.error("❌ Error en sesión:", err.message);
      return res.status(500).json({ error: "Error interno" });
    }

    if (!user) {
      return res.status(401).json({ success: false, message: "Credenciales incorrectas" });
    }

    // Comparamos la contraseña enviada con el hash almacenado
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: "Credenciales incorrectas" });
    }
  });
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
