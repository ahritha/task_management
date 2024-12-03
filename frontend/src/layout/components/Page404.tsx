import React from 'react'
import errorimage from '../../assets/images/404.png'

const Page404 : React.FC = () => {
  return (
    <React.Fragment>
        <div style={{height: '90vh'}} className='d-flex justify-content-center align-items-center '>
          <div>
            <h2 className='text-white text-center'>Page Not Found</h2>
            <img width={300} src={errorimage} alt="" />
          </div>
        </div>
    </React.Fragment>
  )
}

export default Page404