import React, { useMemo, useState } from 'react'
import Table from '../../shared-ui/Table'
import { tasksColumns } from './components/TableColumns'
import useTasks from './actions/hook'
import SelectForm from '../../shared-ui/SelectForm'

const Tasks = () => {
  const { tasks } = useTasks()
  const memoizedTasks = useMemo(() => tasks, [tasks]);

  const filterOptions = [
    { label: 'All', value: '' },
    { label: 'Completed', value: 'completed' },
    { label: 'Incomplete ', value: 'incomplete' },
  ];
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  };

  return (
    <div>
      <h1 className='text-lg  font-semibold mb-4'>Tasks List</h1>
      <div className='flex justify-start'>
        <div>
          <SelectForm
            id="taskFilter"
            onFilter={handleFilterChange}
            options={filterOptions}
            label="Filter tasks"
          />
        </div>
      </div>
      <Table columns={tasksColumns} data={memoizedTasks} />
    </div>
  )
}

export default Tasks