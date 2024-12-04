import {  Request, Response } from 'express';
import Task from '../models/tasks.model';
import { getParams } from '../helpers/param';
import { listingRS } from '../helpers/response';


const TaskController = {
  getTasks: async (req: Request, res: Response) => {
    try {
      const { page, size, status } = getParams(req);
      const filter: Record<string, any> = {};
      if (status) {
        filter.status = status; 
      }
      const tasks = await listingRS(Task, page, size, filter);
      res.status(200).json(tasks);
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
      task.status = 'completed';
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
