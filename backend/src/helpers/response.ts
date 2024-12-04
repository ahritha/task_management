import { Model, Document } from 'mongoose';
import { Paging, Response, SortOption } from './model';



export const response = <T>(status_code: number = 200, message: string = "success", data?: T, paging?: Paging): Response<T> => ({
  status_code,
  message,
  message_key: message.toLowerCase().replace(/ /g, "_"),
  data: data || null,
  paging: paging || { page: 0, size: 0, totals: 0, pageTotals: 0 }
});


export const listingRS = async (model: any, page: number, size: number, filter: Record<string, any>) => {
  const skip = (page - 1) * size;
  const limit = size;

  const tasks = await model
    .find(filter)
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 }) 
    .exec();

  const total = await model.countDocuments(filter);

  return {
    data: tasks,
    paging: {
      total,
      page,
      size,
      totalPages: Math.ceil(total / size),
    },
  };
};




export const PagingRS = async <T extends Document>(
  model: Model<T>,
  page: number = 1,
  size: number = 10,
) => {
  const totalRecords = await model.countDocuments();

  const paging: Paging = {

    page,
    size,
    totals: totalRecords,
    pageTotals: Math.ceil(totalRecords / size),
  };

  return paging;
}

