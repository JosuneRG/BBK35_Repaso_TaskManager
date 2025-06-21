const { log } = require('node:console');
const Task = require('../models/Task');
require("dotenv").config();   


const TaskController = {
    
    // 1 - Endpoint para crear una tarea
    async createTask(req, res) {
        try {
            const { title } = req.body.title;
            const task = new Task({ title });
            await task.save();
            res.status(201).json({message:'Todo correcto',task});
        } catch (err) {
            console.log(error);
            res.status(500).json({message:'Fatal error'});
        }
    },

    // 2 - Endpoint para traer todas las tareas
    async getAllTasks(req, res) {
        try {
            const tasks = await Task.find();
            res.status(201).json({message:'Todo correcto',task});
            res.json(tasks);
        } catch (err) {
             res.status(500).json({message:'Fatal error'});
        }
    },

    // 3 - Endpoint para buscar tarea por id
    async getTaskById(req, res) {
        try {
            const task = await Task.findById(req.params.id);

            if (!task) return res.status(404).json({ message: 'No encontrada' });
            res.json(task);
        } catch (err) {
             res.status(500).json({message:'Fatal error'});
        }
    },

    // 4 - Endpoint para marcar una tarea como completada
    async markAsCompleted(req, res) {
        try {
            const task = await Task.findByIdAndUpdate(
            req.params.id,
            { completed: true },
            { new: true }
            );
            res.json(task);
        } catch (err) {
            res.status(500).json({message:'Fatal error'});
        }
    },

    // 5 - Endpoint para actualizar una tarea y que solo se pueda cambiar el título de la tarea.
    //  Es decir, que no me deje cambiar el campo “completed” desde este endpoint, sino solo, el título.

    async updateTitle(req, res) {
        try 
        {
                const { title } = req.body;
                const task = await Task.findById(req.params.id);

                if (!task) return res.status(404).json({ message: 'No encontrada' });

                task.title = title; // Solo se cambia el título
                await task.save();

                res.json(task);
        } 
        catch (err) {
            res.status(500).json({message:'Fatal error'});
        }
    },

    // 6 - Endpoint para eliminar una tarea
    async deleteTask(req, res)  {
        try 
        {
            await Task.findByIdAndDelete(req.params.id);
            res.json({ message: 'Tarea eliminada' });
        } 
        catch (err) {
             res.status(500).json({message:'Fatal error'});
        }
    }
}

module.exports = TaskController;