import React from 'react'
import StudentForm from './components/StudentForm'
import AllStudents from './components/AllStudents'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>



<BrowserRouter>


<Routes>
<Route path="/" element={<AllStudents />} />
<Route path="/add" element={<StudentForm />} />


</Routes>


</BrowserRouter>


    </div>
  )
}
