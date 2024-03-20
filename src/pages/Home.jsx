import React from 'react'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

const Home = () => {
  return (
    <section>
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12">
            <Sidebar/>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12">
            <Content/>
        </div>
      </div>
    </section>
  )
}

export default Home
