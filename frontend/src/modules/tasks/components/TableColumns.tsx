import { Column } from "../../../assets/helper/types";
import { ActionCells } from "./ActionCells";
import StatusCells from "./StatusCells";

export const tasksColumns: Column[] = [
    { header: 'Title', accessor: 'title'},
    { header: 'Description', accessor: 'description' },
    { header: 'Due Date', accessor: 'dueDate', render: (row) => new Date(row.dueDate).toLocaleDateString() },
    { header: 'Status', accessor: 'status' , render: (row) => <StatusCells status={row.status}/> },
    { header: 'Actions', accessor: 'actions' , render: (row) => <ActionCells data={row}/> },
  ];

  