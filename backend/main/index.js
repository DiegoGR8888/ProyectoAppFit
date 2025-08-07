const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// Ruta para guardar datos del formulario
app.post("/api/register", (req, res) => {
  const { nombre, email, password, edad, sexo, altura, peso, objetivo, actividad, deportes } = req.body;

  const sql = `INSERT INTO users (nombre, email, password, edad, sexo, altura, peso, objetivo, actividad, deportes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const params = [nombre, email, password, edad, sexo, altura, peso, objetivo, actividad, deportes];

  db.run(sql, params, function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: "Error al guardar usuario." });
    }
    res.status(201).json({ success: true, id: this.lastID });
  });
});

//Ruta para iniciar sesion
app.post("/api/sesion", (req, res) => {
  const { email, nombre, password } = req.body;

  const sql = `
    SELECT * FROM users 
    WHERE (email = ? OR nombre = ?) AND password = ?
  `;
  const params = [email, nombre, password];


  db.get(sql, params, (err, row) => {
    if (err) {
      console.error("Error en sesión:", err.message);
      return res.status(500).json({ error: "Error interno" });
    }

    if (row) {
      // Usuario encontrado
      res.json({ success: true, user: row });
    } else {
      // No coincide
      res.status(401).json({ success: false, message: "Credenciales incorrectas" });
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
