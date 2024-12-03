import { Request } from "express";

export interface RequestWithUser extends Request {
    user?: {
        _id: string;
        username: string;
        email: string;
        isAdmin: boolean;
        avatar: string;
        bookings: any[];
        ownedHotels: any[];
    }
}

export interface Paging {
    page: number;
    size: number;
    totals: number;
    pageTotals: number;
}


export type SortOption = { [key: string]: 1 | -1 };


export interface Response<T> {
    status_code: number;
    message: string;
    message_key: string;
    data: T | null;
    paging: Paging;
}