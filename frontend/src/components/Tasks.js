import React, { useState, useEffect } from "react";

function Tasks({ token }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:4000/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Error al obtener tareas");
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error(err);
      setMessage(err.message);
    }
  };

  const addTask = async () => {
    try {
      const res = await fetch("http://localhost:4000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ title }),
      });
      if (!res.ok) throw new Error("Error al crear tarea");
      setTitle("");
      fetchTasks();
    } catch (err) {
      console.error(err);
      setMessage(err.message);
    }
  };

  const completeTask = async (id) => {
    try {
      const res = await fetch(`http://localhost:4000/tasks/${id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Error al completar tarea");
      fetchTasks();
    } catch (err) {
      console.error(err);
      setMessage(err.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await fetch(`http://localhost:4000/tasks/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Error al eliminar tarea");
      fetchTasks();
    } catch (err) {
      console.error(err);
      setMessage(err.message);
    }
  };

  useEffect(() => {
    if (token) fetchTasks();
  }, [token]);

  return (
    <div>
      <h2>Tareas</h2>
      <input placeholder="Nueva tarea" value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={addTask}>Agregar</button>
      {message && <p>{message}</p>}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} {task.completed ? "(✔)" : ""}
            {!task.completed && <button onClick={() => completeTask(task.id)}>Completar</button>}
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
