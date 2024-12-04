import { Column } from '../assets/helper/types';
import React from 'react';
import Loading from './Loading';

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
  loading?: boolean
}

const Table: React.FC<TableProps> = ({ columns, data, loading }) => {
  if (!columns.length) return <p className="text-center text-red-500 my-4">No columns to display.</p>;

  return (
    <div className="overflow-x-auto border rounded-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 table-auto">
        <thead className="text-xs text-gray-500 uppercase bg-gray-50">
          <tr>
            {columns.map((col) => (
              <th key={col.accessor} scope="col" className="px-6 py-3">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-4 text-center">
                <Loading />
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-4 text-center text-red-500">
                No data to display
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={row.id || rowIndex} className="hover:bg-gray-100">
                {columns.map((col) => (
                  <td
                    key={`${rowIndex}-${col.accessor}`}
                    className="px-6 py-4 break-words max-w-[300px] sm:max-w-[500px] truncate"
                    style={{ wordBreak: 'break-word' }}
                  >
                    {col.render ? col.render(row) : row[col.accessor] || '-'}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>

      </table>
    </div>
  );
};

export default Table;
