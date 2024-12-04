import { Request } from "express";

export const getParams = (req: Request) => {
    const page = parseInt(req.query.page as string, 10) || 1; 
    const size = parseInt(req.query.size as string, 10) || 10; 
    const status = req.query.status as string | undefined;
    
    return { page, size, status };
  };
  
