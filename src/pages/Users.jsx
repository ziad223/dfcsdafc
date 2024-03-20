import React from 'react'
import Sidebar from '../components/Sidebar'
import UsersTable from '../components/UsersTable'

const Users = () => {
  return (
    <div className='row'>
      <div className="col-lg-3 col-md-3 col-sm-12">
      <Sidebar/>
      </div>
      <div className="col-lg-9 col-md-9 col-sm-12">
        <UsersTable/>
      </div>

    </div>
  )
}

export default Users
