import { lazy } from "react"; 
import { Navigate } from "react-router-dom";
import Page404 from "../shared-ui/Page404";


 const TasksPage = lazy(() => import("../modules/tasks/Tasks"));

const Routes  = [
    {
        path: "tasks",
        element: <TasksPage/>
    },
    {
        path : "404",
        element: <Page404/>
    },
    {
        path : "/",
        element: <Navigate to={"/tasks"} />
    },
    {
        path : "*",
        element: <Navigate to={"/404"} />
    },

]

export default Routes;