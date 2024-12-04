import React from 'react'

const StatusCells = ({status} : {status: string}) => {
  return (
    <div>
        <span className={`${status === 'completed' ? 'bg-green-400' : 'bg-red-400'} px-1.5 py-0.5 rounded-sm text-white`}>
         {status}
        </span>
    </div>
  )
}

export default StatusCells