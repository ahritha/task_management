export interface Column {
    header: string;
    accessor: string;
    render?: (row: Record<string, any>) => React.ReactNode; 
  }

export interface Paging {
  size: number;
  page: number;
  totalPages: number;
  total: number;
  status? : string
}
export interface Response<T> {
  message: string;
  data: T;
  paging?: Paging;
}
