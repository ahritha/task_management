import { Request } from "express";
import { SortOption } from "./model";

export const getParams = (req: Request) => {
    const id = req.params.id ? req.params.id : null;
    const order = req.query.order === 'asc';
    const sortField = req.query.sort as string || 'createdAt';
    const sortOrder = (order || undefined) ? 1 : -1;
    const page = Number(req.query.page) || 1;
    const size = Number(req.query.size) || 10;
    const query = req.query.search ? (req.query.search as string) : '';
    const sort: SortOption = { [sortField]: sortOrder };

    return { page, size, query, sort, id };
};
