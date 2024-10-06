import React, { useState } from "react";
import "./AddForm.css"
import { useNavigate } from "react-router-dom";

const AddDepartment = ({addDepartment}) => {

  const [deptID, setDeptID] = useState("")
  const [deptName, setDeptName] = useState("")
  const [deptDesc, setDeptDesc] = useState("")

  const navigate = useNavigate()

  const newDepartment = {
    deptID :deptID,
    deptName : deptName,
    deptDesc : deptDesc
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!deptName || !deptID)
      return;
    addDepartment(newDepartment)
    navigate("/")
    console.log(newDepartment)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h5>Add New Department</h5>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          ID
        </label>
        <input
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter ID"
          value={deptID}
          onChange={(e) => setDeptID(e.target.value)}
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
          value={deptName}
          onChange={(e) => setDeptName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          placeholder="Enter Description"
          value={deptDesc}
          onChange={(e) => setDeptDesc(e.target.value)}
        ></textarea>
      </div>        

      <button className="btn btn-primary d-flex justify-content-center" style={{width:"100%"}}>Add</button>
    </form>
  );
};

export default AddDepartment;
 