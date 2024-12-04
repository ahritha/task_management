import { confirmAlert, errorAlert, successAlert } from '../../../assets/helper/alert';
import { axiosDelete, axiosGet, axiosPatch, axiosPost } from '../../../assets/helper/axiosHelper';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setLoading, setParams, setTasks, Task } from './reducer';

const useTasks = () => {
  const dispatch = useAppDispatch();
  const tasksState = useAppSelector((state) => state.tasks);
  const getTasksList = (pr: Record<string, any>) => {
    dispatch(setLoading(true));
    axiosGet<Task[]>('/tasks',{...tasksState.params, ...pr})
      .then((res) => {
        dispatch(setParams(pr));
        dispatch(setTasks({...res.data , tasksState}));
      })
      .catch((err) => {
        console.error('Error fetching tasks:', err);
      })
      .finally(() => dispatch(setLoading(false)));
  };

  const deleteTasks = (id : string) =>{
    axiosDelete(`/tasks/${id}`).then((res) => {
      confirmAlert("Delete Confirmation" , "Are you sure you want to delete this task?" , () => getTasksList({}))
    }).catch((err) => {
      errorAlert('Error deleting task')
    })
  }

  const addTask = (payload ={}) =>{
    axiosPost(`/tasks` , payload).then((res) => {
      getTasksList({})
      successAlert('Task added successfully')
    })
    .catch((err) => {
      errorAlert('Error adding task')
    })
  }

  const markComplete = (id : string) =>{
    axiosPatch(`/tasks/${id}` , {status : 'completed'}).then((res) => {
      getTasksList({})
      successAlert('Task marked as completed')
    })
    .catch((err) => {
      errorAlert('Error marking task as completed')
    })
  }

  return {
    ...tasksState,
    getTasksList,
    deleteTasks,
    addTask,
    markComplete
  };
};

export default useTasks;
