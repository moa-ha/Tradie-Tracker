import { FormEvent, MouseEventHandler, useState } from 'react'
import { useEmployees } from '../../hooks/useEmployees'
import { useAssignEe } from '../../hooks/useJobs'
import { Assign } from '../../../models/jobs'

function EmployeeList({ id }: Assign) {
  // bring employee list
  const { data, isLoading, isError, error } = useEmployees()
  const [selectedEmployee, setSelectedEmployee] = useState({
    id: id,
    employee_id: 0,
  })

  const mutation = useAssignEe()

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error?.message}</p>
  }

  const handleEmployeeChange = (e: { target: { value: string } }) => {
    console.log('id from jobcard: ' + id)
    setSelectedEmployee((prev) => ({
      ...prev,
      employee_id: parseInt(e.target.value),
    }))
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    mutation.mutate(selectedEmployee)
  }

  if (data) {
    console.log(data)

    return (
      <>
        <select
          value={selectedEmployee.employee_id ?? ''}
          onChange={handleEmployeeChange}
        >
          <option value="">Select an employee</option>
          {data.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.name}
            </option>
          ))}
        </select>
        {console.log(selectedEmployee)}
        <button onClick={handleClick} className="dashboard-btn">
          ✔️
        </button>
      </>
    )
  }
}

export default EmployeeList
