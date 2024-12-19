import React, { useEffect } from 'react'
import Table from '../../shared-ui/Table'
import { tasksColumns } from './components/TableColumns'
import useTasks from './actions/hook'
import SelectForm from '../../shared-ui/SelectForm'
import LoadMore from '../../shared-ui/LoadMore'
import AddModal from './components/AddModal'


const Tasks = () => {
  const { tasks, getTasksList, paging } = useTasks()
  useEffect(() => {
    getTasksList({})
  }, [])

  const filterOptions = [
    { label: 'All', value: '' },
    { label: 'Completed', value: 'completed' },
    { label: 'Incomplete ', value: 'incomplete' },
  ];

  return (
    <div>
      <h1 className="text-lg font-semibold mb-4" role="heading" aria-level={1}>
        Tasks List
      </h1>

      <div className="flex justify-between">
        <div>
          <SelectForm
            id="taskFilter"
            onFilter={(e) => getTasksList({ status: e.target.value })}
            options={filterOptions}
            label="Filter tasks"
            aria-labelledby="taskFilter" 
          />
        </div>

        <div>
          <AddModal
            aria-label="Add a new task" 
          />
        </div>
      </div>

      <Table
        columns={tasksColumns}
        data={tasks}
        aria-describedby="taskTable" 
      />

      <LoadMore
        total={paging?.total || 0}
        currentTotal={tasks.length}
        func={() => getTasksList({ size: paging?.size ? paging.size + 10 : 10 })}
        aria-label="Load more tasks" 
      />
    </div>

  )
}

export default Tasks