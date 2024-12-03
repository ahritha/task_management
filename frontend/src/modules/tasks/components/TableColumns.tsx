import { Column } from "../../../assets/types";

export const tasksColumns: Column[] = [
    { header: 'Title', accessor: 'title'},
    { header: 'Description', accessor: 'description' },
    { header: 'Due Date', accessor: 'dueDate' ,},
    { header: 'Status', accessor: 'status'  },
    { header: 'Actions', accessor: 'actions'  },
  ];

  export const tasks = [
    {
      title: 'Complete Project Report',
      description: 'Write the final report for the ongoing project with all deliverables.',
      dueDate: '2024-12-10',
      status: 'Pending',
      actions: 'Edit | Delete', 
    },
    {
      title: 'Design Homepage',
      description: 'Create the layout and design for the new website homepage.',
      dueDate: '2024-12-12',
      status: 'In Progress',
      actions: 'Edit | Delete',
    },
    {
      title: 'Meeting with Client',
      description: 'Schedule a meeting with the client to discuss the project progress.',
      dueDate: '2024-12-15',
      status: 'Completed',
      actions: 'Edit | Delete',
    },
    {
      title: 'Task Assignment',
      description: 'Assign tasks to the team members for the next sprint.',
      dueDate: '2024-12-18',
      status: 'Pending',
      actions: 'Edit | Delete',
    },
    {
      title: 'Fix Bug in Code',
      description: 'Resolve the bug reported in the user login feature.',
      dueDate: '2024-12-05',
      status: 'Completed',
      actions: 'Edit | Delete',
    },
  ];
  