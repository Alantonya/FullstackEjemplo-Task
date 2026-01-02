const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use("/auth", authRoutes);   // /auth/register, /auth/login
app.use("/tasks", taskRoutes);  // /tasks/... (protegidas con authMiddleware)

// Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
