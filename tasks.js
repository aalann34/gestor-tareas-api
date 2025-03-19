// Variables y constantes
let tasks = [];
const MAX_TASKS = 5; // Límite máximo de tareas

// Función para agregar una tarea
function addTask(task) {
    if (tasks.length >= MAX_TASKS) {
        return { error: "No puedes agregar más tareas. Límite alcanzado." };
    }
    tasks.push(task);
    return task;
}

// Función para listar todas las tareas
function listTasks() {
    return tasks;
}

// Función para eliminar una tarea por su ID
function removeTask(id) {
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);
    return tasks.length < initialLength;
}

// Función para actualizar una tarea por su ID
function updateTask(id, updatedTask) {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        return { error: "Tarea no encontrada." };
    }
    tasks[index] = updatedTask;
    return updatedTask;
}

// Exportar funciones
module.exports = { addTask, listTasks, removeTask, updateTask };
