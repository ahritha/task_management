export interface Column {
    header: string;
    accessor: string;
    render?: (row: Record<string, any>) => React.ReactNode; 
  }

export interface Paging {
  size: number;
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

export interface Response<T> {
  message: string;
  data: T;
  paging?: Paging;
}
