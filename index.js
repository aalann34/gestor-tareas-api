const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Lista de tareas (esto debe persistir en una base de datos en producción)
const tasks = [
    { id: 1, description: 'Hacer la compra', completed: false },
    { id: 2, description: 'Estudiar para el examen', completed: false },
    { id: 3, description: 'Llamar a mamá', completed: true }
];

// Ruta principal
app.get('/', (req, res) => {
    res.send('API de Gestor de Tareas');
});

// Obtener todas las tareas
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// Obtener tarea por ID
app.get('/api/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Tarea no encontrada');
    res.json(task);
});

// Crear nueva tarea
app.post('/api/tasks', (req, res) => {
    const { description, completed } = req.body;

    // Validar datos
    if (!description) {
        return res.status(400).send('La descripción es obligatoria');
    }

    const task = {
        id: tasks.length + 1,
        description,
        completed: completed || false
    };

    tasks.push(task);
    res.status(201).json(task);
});

// Actualizar tarea
app.put('/api/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Tarea no encontrada');

    const { description, completed } = req.body;

    // Validar datos
    if (description) {
        task.description = description;
    }

    if (completed !== undefined) {
        task.completed = completed;
    }

    res.json(task);
});

// Eliminar tarea
app.delete('/api/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).send('Tarea no encontrada');

    tasks.splice(taskIndex, 1);
    res.status(204).send();
});

// Establecer puerto y escuchar
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
