# FullstackEjemplo-Task

Proyecto **Fullstack** de ejemplo que implementa **API REST con JWT** y un **frontend en React** para gestión de tareas.

---

## 🛠 Tecnologías usadas

**Backend:**
- Node.js
- Express
- PostgreSQL
- JWT para autenticación
- Bcrypt para hash de contraseñas

**Frontend:**
- React 18
- Fetch API para consumir la API REST
- LocalStorage para guardar token JWT

---

## 🔹 Funcionalidades

**Backend / API REST**
- Registro de usuarios (`POST /auth/register`)
- Login con JWT (`POST /auth/login`)
- CRUD de tareas (`/tasks`) protegido con JWT:
  - Crear tarea
  - Listar tareas de un usuario
  - Marcar tarea como completada
  - Eliminar tarea

**Frontend / React**
- Formulario de registro de usuario
- Formulario de login y almacenamiento de JWT en LocalStorage
- CRUD de tareas conectado a la API
- Mensajes de éxito/error al usuario

---

## 💻 Instalación y ejecución

### Backend

1. Ir a la carpeta `backend`:

```bash
cd backend
