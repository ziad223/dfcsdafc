import React from 'react'

const Cards = () => {
  return (
    <div className='row container'>
      <div className="col-lg-3 col-md-3 col-sm-12">
        <div className="card p-2 text-center bg-success text-white">
            <h3>+100</h3>
            <h2>Users</h2>
            <h5>see all users</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12">
        <div className="card p-2 text-center bg-warning text-white">
            <h3>+200</h3>
            <h2>Products</h2>
            <h5>see all products</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12">
        <div className="card p-2 text-center bg-primary text-white">
            <h3>+300</h3>
            <h2>Client</h2>
            <h5>see all client</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12">
        <div className="card p-2 text-center bg-danger text-white">
            <h3>+400</h3>
            <h2>Categories</h2>
            <h5>see all category</h5>
        </div>
      </div>
    </div>
  )
}

export default Cards
