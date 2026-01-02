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
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear archivo `.env` con tus variables de entorno:

```
DB_USER=postgres
DB_PASSWORD=12345
DB_HOST=localhost
DB_PORT=5432
DB_NAME=tasks
JWT_SECRET=secretkey
```

4. Iniciar el servidor:

```bash
npm run start
```

El backend estará corriendo en: `http://localhost:4000`

---

### Frontend

1. Ir a la carpeta `frontend`:

```bash
cd frontend
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar la aplicación:

```bash
npm start
```

El frontend estará corriendo en: `http://localhost:3000`

---

## 🔹 Uso

1. Registrar un nuevo usuario.
2. Iniciar sesión con email y contraseña.
3. Crear, completar o eliminar tareas.
4. Todas las tareas son propias del usuario logueado gracias a JWT.

---

## 🔹 Buenas prácticas incluidas

- Rutas protegidas con JWT
- Hash de contraseñas con Bcrypt
- Variables sensibles en `.env`
- Separación de backend y frontend
- `.gitignore` configurado para no subir `node_modules` ni secretos

---

## 🔹 Estructura del proyecto

```
FullstackEjemplo-Task/
├─ backend/
│  ├─ index.js
│  ├─ routes/
│  ├─ middleware/
│  ├─ db.js
│  ├─ package.json
│  └─ .env
└─ frontend/
   ├─ src/
   ├─ public/
   ├─ package.json
   └─ .gitignore
```
