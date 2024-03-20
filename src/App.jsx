import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import './App.css'
import Users from './pages/Users';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/users' element = {<Users/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
