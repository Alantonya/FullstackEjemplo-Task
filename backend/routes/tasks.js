const express = require("express");
const db = require("../db");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Obtener tareas
router.get("/", auth, async (req, res) => {
  try {
    const tasks = await db.query(
      "SELECT * FROM tasks WHERE user_id=$1",
      [req.user.id]
    );
    res.json(tasks.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error en servidor" });
  }
});

// Crear tarea
router.post("/", auth, async (req, res) => {
  try {
    const { title } = req.body;

    if (!title)
      return res.status(400).json({ msg: "El título es requerido" });

    await db.query(
      "INSERT INTO tasks(user_id,title) VALUES($1,$2)",
      [req.user.id, title]
    );

    res.json({ msg: "Tarea creada" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error en servidor" });
  }
});

// Completar tarea
router.put("/:id", auth, async (req, res) => {
  try {
    const result = await db.query(
      "UPDATE tasks SET completed=true WHERE id=$1 AND user_id=$2 RETURNING *",
      [req.params.id, req.user.id]
    );

    if (result.rowCount === 0)
      return res.status(404).json({ msg: "Tarea no encontrada" });

    res.json({ msg: "Tarea completada" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error en servidor" });
  }
});

// Eliminar tarea
router.delete("/:id", auth, async (req, res) => {
  try {
    const result = await db.query(
      "DELETE FROM tasks WHERE id=$1 AND user_id=$2",
      [req.params.id, req.user.id]
    );

    if (result.rowCount === 0)
      return res.status(404).json({ msg: "Tarea no encontrada" });

    res.json({ msg: "Tarea eliminada" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error en servidor" });
  }
});

module.exports = router;

