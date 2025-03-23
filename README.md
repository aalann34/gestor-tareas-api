# Gestor de Tareas API

Este es un proyecto de API REST para la gestión de tareas, creado con Node.js, Express.js y desplegado en Vercel.

## URL de la API

[https://gestor-tareas-api.vercel.app](https://gestor-tareas-api.vercel.app)

## Endpoints

### 1. Obtener todas las tareas

**URL:**  
`GET https://gestor-tareas-api.vercel.app/api/tasks`

**Descripción:**  
Obtiene una lista de todas las tareas.

**Ejemplo de respuesta:**

```json
[
  { "id": 1, "description": "Hacer la compra", "completed": false },
  { "id": 2, "description": "Estudiar para el examen", "completed": false },
  { "id": 3, "description": "Llamar a mamá", "completed": true }
]
2. Obtener una tarea por ID
URL:
GET https://gestor-tareas-api.vercel.app/api/tasks/<id>

Descripción:
Obtiene una tarea específica por su ID.

Parámetro:
<id>: ID de la tarea (entero).

Ejemplo de uso:
GET https://gestor-tareas-api.vercel.app/api/tasks/1

Ejemplo de respuesta:

json
Copiar
Editar
{ "id": 1, "description": "Hacer la compra", "completed": false }
Error:
Si el ID no existe:

text
Copiar
Editar
Tarea no encontrada
3. Crear una nueva tarea
URL:
POST https://gestor-tareas-api.vercel.app/api/tasks

Descripción:
Crea una nueva tarea.

Cuerpo de la solicitud:
Debe enviarse en formato JSON.

json
Copiar
Editar
{
  "description": "Nueva tarea",
  "completed": false
}
Ejemplo de respuesta:

json
Copiar
Editar
{ "id": 4, "description": "Nueva tarea", "completed": false }
Errores:
Si no se proporciona la descripción:

text
Copiar
Editar
La descripción es obligatoria
4. Actualizar una tarea
URL:
PUT https://gestor-tareas-api.vercel.app/api/tasks/<id>

Descripción:
Actualiza los datos de una tarea específica.

Parámetro:
<id>: ID de la tarea (entero).

Cuerpo de la solicitud:
Debe enviarse en formato JSON con los datos a actualizar.

json
Copiar
Editar
{
  "description": "Descripción actualizada",
  "completed": true
}
Ejemplo de respuesta:

json
Copiar
Editar
{ "id": 1, "description": "Descripción actualizada", "completed": true }
Errores:
Si el ID no existe:

text
Copiar
Editar
Tarea no encontrada
5. Eliminar una tarea
URL:
DELETE https://gestor-tareas-api.vercel.app/api/tasks/<id>

Descripción:
Elimina una tarea específica por su ID.

Parámetro:
<id>: ID de la tarea (entero).

Ejemplo de uso:
DELETE https://gestor-tareas-api.vercel.app/api/tasks/3

Respuesta:
Código de estado 204 No Content (sin contenido).

Errores:
Si el ID no existe:

text
Copiar
Editar
Tarea no encontrada
Cómo usar la API
Puedes usar herramientas como Postman, cURL o cualquier cliente HTTP para interactuar con la API.

Ejemplo con cURL:

Crear una nueva tarea:

bash
Copiar
Editar
curl -X POST https://gestor-tareas-api.vercel.app/api/tasks \
-H "Content-Type: application/json" \
-d '{"description": "Leer un libro", "completed": false}'
Listar todas las tareas:

bash
Copiar
Editar
curl -X GET https://gestor-tareas-api.vercel.app/api/tasks
Obtener una tarea por ID:

bash
Copiar
Editar
curl -X GET https://gestor-tareas-api.vercel.app/api/tasks/1
Actualizar una tarea:

bash
Copiar
Editar
curl -X PUT https://gestor-tareas-api.vercel.app/api/tasks/1 \
-H "Content-Type: application/json" \
-d '{"description": "Tarea actualizada", "completed": true}'
Eliminar una tarea:

bash
Copiar
Editar
curl -X DELETE https://gestor-tareas-api.vercel.app/api/tasks/1
Notas
La API utiliza CORS, por lo que puede ser consumida desde un navegador o cliente externo.

Esta implementación es para fines educativos y utiliza almacenamiento en memoria.
