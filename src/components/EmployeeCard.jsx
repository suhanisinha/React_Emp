import { FaNoteSticky } from "react-icons/fa6";

const EmployeeCard = ({employee}) => {
  return (
    <div className="col-md-4 single-emp-item all-category">
        <div className="card card-body">
            <p style={{marginLeft: "auto"}} className="font-12 text-muted">{employee.empDept}</p>
            <h5 className="text-truncate w-75 mb-0">{employee.empName}</h5>
            <h6 className="text-truncate w-75 mb-0">{employee.empID}</h6>
            <p></p>
            <p className="text-muted">{employee.empAddress}</p>
        </div>
        <p></p>
    </div>
  )
}

export default EmployeeCard