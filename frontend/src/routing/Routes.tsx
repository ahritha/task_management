/* import { lazy } from "react"; */
import Page404 from "../layout/components/Page404";

//Lazy Modules
/* const DashboardPage = lazy(() => import("../modules/dashboard/DashboardPage")); */

const Routes  = [
    {
        path: "tasks",
        element: "<>tasks</>"
    },
    {
        path : "404",
        element: <Page404/>
    }
]

export default Routes;