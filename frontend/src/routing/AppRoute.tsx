import { Routes, Route ,BrowserRouter  } from 'react-router-dom'
import RouteList from './Routes'
import Layout from '../shared-ui/layout/Layout'
const RouteManage = () => {
  return (
    <BrowserRouter >
    <Routes>
        <Route element={<Layout/>}>
            {
                RouteList.map((r , i)=> <Route key={i} path={r.path} element={r.element}/>)
            }
        </Route>
    </Routes>
</BrowserRouter>
  )
}

export default RouteManage