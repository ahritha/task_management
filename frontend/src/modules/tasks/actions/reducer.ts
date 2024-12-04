
import { createSlice } from '@reduxjs/toolkit';
import { Paging } from '../../../assets/helper/types';

export interface Task {
  title: string;
  description: string;
  dueDate: string;
  status: string;
  _id: string;
}

interface TasksState {
  tasks: Task[];
  paging?: Paging;
  params?: Record<string, any>;
  loading : boolean
}

const initialState: TasksState = {
  tasks: [],
  paging: {
    size: 0,
    page: 0,
    totalPages: 0,
    total: 0,
    status : ''
  },
  params : {},
  loading : false
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload.data; 
      state.paging = action.payload.paging
    },
    setParams: (state, action) => {      
      state.params = {
        ...state.params,
        ...action.payload,
      }
    },
    setLoading: (state , action) => {
      state.loading = action.payload
    }
  },
});

export const { setTasks , setParams , setLoading } = tasksSlice.actions;

export default tasksSlice.reducer;
