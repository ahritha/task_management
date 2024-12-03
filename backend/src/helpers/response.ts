import { Model, Document } from 'mongoose';
import { Paging, Response, SortOption } from './model';



export const response = <T>(status_code: number = 200, message: string = "success", data?: T, paging?: Paging): Response<T> => ({
  status_code,
  message,
  message_key: message.toLowerCase().replace(/ /g, "_"),
  data: data || null,
  paging: paging || { page: 0, size: 0, totals: 0, pageTotals: 0 }
});


export const listingRS = async <T extends Document>(
  model: Model<T>,
  page: number = 1,
  size: number = 10,
  query: [string, string] = ["", ""],
  sort: SortOption = { createdAt: -1 },
  populate?: [string, string][],
  select: string = "-password"
): Promise<Response<T[]>> => {
  try {
    let searchQuery = {};
    if (query) {
      searchQuery = { [query[0]]: { $regex: query[1], $options: 'i' } };
    }

    let queryExec = model.find(searchQuery).select(select).skip((page - 1) * size).limit(size).sort(sort);
    const totalRecords = await model.countDocuments(searchQuery);


    if (populate) {
      populate.forEach(([path, select]) => {
        queryExec = queryExec.populate({
          path: path,
          select: select
        });
      });
    }


    const data = await queryExec.exec();
    const paging: Paging = {
      page,
      size,
      totals: totalRecords,
      pageTotals: Math.ceil(totalRecords / size),
    };

    return response(200, "success", data, paging);
  } catch (error) {
    return response(500, `Error fetching data: ${error}`);
  }
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

