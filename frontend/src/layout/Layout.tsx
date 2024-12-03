import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'


const Layout = () => {
  return (
    <div >
        <Container >
          <Sidebar/>
           <Outlet/>
        </Container>
    </div>
  )
}

export default Layout