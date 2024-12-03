
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { tasks } from '../components/TableColumns';

interface Task {
  title: string;
  description: string;
  dueDate: string;
  status: string;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [...tasks],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload; 
    },
  },
});

export const { setTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
