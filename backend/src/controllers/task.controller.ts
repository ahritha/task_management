import { NextFunction, Request, Response } from 'express';
import User from '../models/tasks.model';
import { listingRS } from '../helpers/response';
import { getParams } from '../helpers/param';


/* - GET /tasks: Retrieve a list of tasks.
- POST /tasks: Create a new task.
- PATCH /tasks/🆔 Mark a task as completed.
- DELETE /tasks/🆔 Delete a task. */

const tasksController = {
    listing: async (req: Request, res: Response , next : NextFunction) => {
        try {
            const { page, size } = getParams(req);
            const users = await listingRS(User, page, size);
            res.status(200).json(users);
        } catch (error) {
           next(error)
        }
    },
    
    
};

export default tasksController;
