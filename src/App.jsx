import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ShowAllTask from './Components/ShowAllTask'
import AddTask from './Components/AddTask'
import UpdateTask from './Components/UpdateTask'
import TaskNotFound from './Components/TaskNotFound'

function App() {

  return (
    <>
      <h1 className='text-black  text-6xl text-center'>TO DO LIST </h1>
      <Routes>
        <Route path='/' element={<ShowAllTask/>}/>
        <Route path='/task'>
          <Route path='add' element={<AddTask/>} />
          <Route path='update/:id' element={<UpdateTask />} />
        </Route>
       <Route path='*' element={<TaskNotFound/>} />
      </Routes>
    </>
  )
}

export default App
