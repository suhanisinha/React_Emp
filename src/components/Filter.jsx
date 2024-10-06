import React from 'react'

const Filter = ({departments, handleFilterText}) => {
  return (
    <div className="container" style={{width: "500px", margin: "20px auto"}}>
        <select className="form-select" onChange={(e) => handleFilterText(e.target.value)} aria-label="Default select example" style={{height: "50px"}}>
          <option selected>All Employees</option>
          {departments.map(department => (
            <option value = {department.deptName} key={department.deptID}>
              {department.deptName}
            </option> ))
          }
        </select>
      </div>
  )
}

export default Filter