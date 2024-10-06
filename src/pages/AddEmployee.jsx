import React, { useState } from "react";
import "./AddForm.css"
import { useNavigate } from "react-router-dom";

const AddEmployee = ({addEmployee, departments}) => {


  const [empID, setEmpID] = useState("")
  const [empName, setEmpName] = useState("")
  const [empDept, setEmpDept] = useState("")
  const [empAddress, setEmpAddress] = useState("")

  const navigate = useNavigate()

  const newEmployee = {
    empID : empID,
    empName : empName,
    empDept : empDept,
    empAddress : empAddress
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!empID || !empName || !empDept)
      return;
    addEmployee(newEmployee)
    navigate("/")
    console.log(newEmployee)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h5>Add New Employee</h5>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          ID
        </label>
        <input
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter ID"
          value={empID}
          onChange={(e) => setEmpID(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Name"
          value={empName}
          onChange={(e) => setEmpName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Department
        </label>
        <select 
          className="form-select" 
          aria-label="Default select example" 
          value={empDept} 
          onChange={(e) => setEmpDept(e.target.value)} 
          style={{height: "40px"}}>
          <option selected>Select the Department</option>
          {departments.map(department => (
            <option value = {department.deptName} key={department.deptID}>
              {department.deptName}
            </option> ))
          }
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Address
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          placeholder="Enter Address"
          value={empAddress}
          onChange={(e) => setEmpAddress(e.target.value)}
        ></textarea>
      </div>        

      <button className="btn btn-primary d-flex justify-content-center" style={{width:"100%"}}>Add</button>
    </form>
  );
};

export default AddEmployee;
 