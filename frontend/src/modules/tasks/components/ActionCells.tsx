import { CircleCheckBig, Trash } from 'lucide-react';
import React from 'react'
import useTasks from '../actions/hook';

export const ActionCells = ({ data }: any) => {
  const { status } = data
  const {deleteTasks , markComplete} = useTasks()

  return (
    <>
      <div className="flex gap-2 items-center">
        <button title='Delete Tasks' onClick={()=>deleteTasks(data._id)}><Trash className='cursor-pointer text-red-400' size={20} /></button>
        <button
          onClick={() => markComplete(data._id)}
          className={`${status === 'completed' ? 'btn-disabled text-green-400' : ' text-gray-300'}`}
          disabled={status === 'completed'}
          title={status === 'completed' ? 'Task is already completed' : 'Mark as Complete'}
        >
          <CircleCheckBig size={20} />
        </button>
      </div>

    </>
  );
}
