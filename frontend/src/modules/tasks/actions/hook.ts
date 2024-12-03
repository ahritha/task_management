import { useAppSelector } from "../../../redux/hooks"

const useTasks = () => {
  const tasksState = useAppSelector((state)=>state.tasks)
  return {
    ...tasksState
  }
}

export default useTasks