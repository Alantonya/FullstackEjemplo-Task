const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();

// Registro
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ msg: "Campos requeridos" });

    const exists = await db.query(
      "SELECT id FROM users WHERE email=$1",
      [email]
    );

    if (exists.rows.length > 0)
      return res.status(400).json({ msg: "Email ya registrado" });

    const hash = await bcrypt.hash(password, 12);

    await db.query(
      "INSERT INTO users(name,email,password) VALUES($1,$2,$3)",
      [name, email, hash]
    );

    res.json({ msg: "Usuario creado" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error en servidor" });
  }
});


// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await db.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    const user = result.rows[0];

    if (!user)
      return res.status(401).json({ msg: "Credenciales inválidas" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
      return res.status(401).json({ msg: "Credenciales inválidas" });

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error en servidor" });
  }
});

module.exports = router;
