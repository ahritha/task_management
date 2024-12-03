import React from 'react'

const Page404 : React.FC = () => {
  return (
    <React.Fragment>
        <div className="flex flex-col items-center justify-center h-[90vh]">
            <h1 className="text-9xl text-red-500 font-bold">404</h1>
            <p className="text-2xl text-gray-600">Page Not Found</p>
        </div>
    </React.Fragment>
  )
}

export default Page404