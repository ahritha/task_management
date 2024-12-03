import express from 'express';
import TaskController from '../controllers/task.controller';
const router = express.Router();

router
.get('/tasks', TaskController.getTasks)
.post('/tasks', TaskController.createTask)
.patch('/tasks/:id', TaskController.markTaskAsCompleted)
.delete('/tasks/:id', TaskController.deleteTask)


export default router;
