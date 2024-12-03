import {  Request, Response } from 'express';
import Task from '../models/tasks.model';
import { listingRS, response } from '../helpers/response';


const TaskController = {
  getTasks: async (req: Request, res: Response) => {
    try {
      return res.status(200).json(listingRS(Task , 1 , 10));
    } catch (err) {
      return res.status(500).json({ message: 'Server error', error: err });
    }
  },

  createTask: async (req: Request, res: Response) => {
    try {
      const { title, description, dueDate } = req.body;
      const newTask = new Task({ title, description, dueDate });
      await newTask.save();
      return res.status(201).json({ message: 'Task created successfully', data: newTask });
    } catch (err) {
      return res.status(500).json({ message: 'Server error', error: err });
    }
  },

  markTaskAsCompleted: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const task = await Task.findById(id);
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      task.status = 'Completed';
      await task.save();
      return res.status(200).json({ message: 'Task marked as completed', data: task });
    } catch (err) {
      return res.status(500).json({ message: 'Server error', error: err });
    }
  },

  deleteTask: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const task = await Task.findByIdAndDelete(id);
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      return res.status(200).json({ message: 'Task deleted successfully' });
    } catch (err) {
      return res.status(500).json({ message: 'Server error', error: err });
    }
  }
};

export default TaskController;
