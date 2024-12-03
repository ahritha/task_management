import { Routes, Route ,BrowserRouter  } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import RouteList from './Routes'
import Layout from '../layout/Layout'
const RouteManage = () => {
  return (
    <BrowserRouter >
    <Routes>
        <Route element={<Layout/>}>
            {
                RouteList.map((r , i)=> <Route key={i} path={r.path} element={r.element}/>)
            }
            <Route index element={<Navigate to="/tasks"/>}/>
        </Route>
    </Routes>
</BrowserRouter>
  )
}

export default RouteManage