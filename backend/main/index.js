const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// Ruta para guardar datos del formulario
app.post("/api/register", (req, res) => {
  const { nombre, email, edad, objetivo } = req.body;

  const sql = `INSERT INTO users (nombre, email, edad, objetivo) VALUES (?, ?, ?, ?)`;
  const params = [nombre, email, edad, objetivo];

  db.run(sql, params, function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: "Error al guardar usuario." });
    }
    res.status(201).json({ success: true, id: this.lastID });
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
