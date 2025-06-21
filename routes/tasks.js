const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tasksController');

//POST http://localhost:3001/tasks/createTask
// Ya añadir:
// {
//   "title": "Comprar pan"
// }
router.post('/createTask', taskController.createTask);

//GET http://localhost:3001/tasks/getAllTasks
router.get('/', taskController.getAllTasks);

//GET http://localhost:3001/tasks/getTaskById/:id
router.get('/:id', taskController.getTaskById);

//PATCH http://localhost:3001/tasks/markAsCompleted/:id/complete
router.patch('/:id/complete', taskController.markAsCompleted);

//PUT http://localhost:3001/tasks/updateTitle/:id
// y poner:
// {
//   "title": "Nuevo título"
// }
router.put('/:id', taskController.updateTitle);

//DELETE http://localhost:3001/tasks/deleteTask/:id
router.delete('/:id', taskController.deleteTask);

module.exports = router;
