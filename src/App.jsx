import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ShowAllTask from './Components/ShowAllTask'
import AddTask from './Components/AddTask'
import UpdateTask from './Components/UpdateTask'
import TaskNotFound from './Components/TaskNotFound'
import Login from './Components/Login'
import NavBar from './Components/NavBar'

function App() {

  return (

    <>
      <h1 className='text-black text-6xl text-center'> </h1>
      <NavBar />
      {/* {sessionStorage.getItem("user")? sessionStorage.getItem("user"):"No User"} */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/view' element={<ShowAllTask />} />
        <Route path='/add' element={<AddTask />} />
        <Route path='/update/:id' element={<UpdateTask />} />
        <Route path='*' element={<TaskNotFound />} />
      </Routes>
    </>
  )
}
export default App
