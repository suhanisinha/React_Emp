import React from 'react'
import Filter from '../components/Filter'
import EmployeeCardContainer from '../components/EmployeeCardContainer'

const HomePage = ({employees, departments, handleFilterText}) => {
  return (
    <>
    <Filter departments={departments} handleFilterText={handleFilterText} />
    <EmployeeCardContainer employees={employees} />
    </>
  )
}

export default HomePage