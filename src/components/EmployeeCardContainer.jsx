
import EmployeeCard from "./EmployeeCard"

const EmployeeCardContainer = ({employees}) => {
  return (
    <div className="container">
    <div className="emp-has-grid row">
      { employees.map(employee => <EmployeeCard key={employee.id} employee={employee} />)}
    </div>
    </div>
  )
}

export default EmployeeCardContainer