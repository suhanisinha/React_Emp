import { useEffect, useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import AddEmployee from './pages/AddEmployee'
import AddDepartment from './pages/AddDepartment'
import axios from 'axios'
import { toast } from 'react-toastify'

const App = () => {

  const [employees, setEmployees] = useState([])
  const [departments, setDepartments] = useState([])
  const [filterText, setFilterText] = useState("")

  // Filter Employees based on Departments
  const handleFilterText = (val) => {
    setFilterText(val)
    console.log(val)
  }
  const filteredEmployees =
        (filterText === "All Employees" || filterText === "") 
          ? employees
          : employees.filter((employee) => employee.empDept == filterText);

  // Get All Employees data
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/employees/")
    .then(res => {
      console.log(res.data)
      setEmployees(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }, [])

  // Get All Employees data
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/departments/")
    .then(res => {
      console.log(res.data)
      setDepartments(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }, [])

  // Add a new Employee data
  const addEmployee = (data) => {
    axios.post("http://127.0.0.1:8000/employees/", data)
    .then(res =>{
      setEmployees([...employees,data])
      toast.success("Employee has been added successfully!")
      console.log(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  // Add a new Department data
  const addDepartment = (data) => {
    axios.post("http://127.0.0.1:8000/departments/", data)
    .then(res =>{
      setDepartments([...departments,data])
      toast.success("Department has been added successfully!")
      console.log(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage employees={filteredEmployees} 
                                      departments={departments}
                                      handleFilterText={handleFilterText} />} />
      <Route path='add-employee' element={<AddEmployee addEmployee={addEmployee} departments={departments} />} />
      <Route path='add-department' element={<AddDepartment addDepartment={addDepartment} />} />
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}

export default App