
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'


const Layout = () => {
  return (
    < >
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 md:ml-64 p-4">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout