import { useState } from 'react'
import { useEmployees } from '../../hooks/useEmployees'
import Assign from './Assign'

function EmployeeList() {
  const { data, isLoading, isError, error } = useEmployees()
  const [selectedEmployee, setSelectedEmployee] = useState<number | null>(null)

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error?.message}</p>
  }
  if (data) {
    console.log(data)

    return (
      <>
        {/* Dropdown to select employee */}
        <select
          // value={selectedEmployee ?? data.id}
          onChange={(e) => setSelectedEmployee(parseInt(e.target.value))}
        >
          {data.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.name}
              <Assign id={employee.id} />
            </option>
          ))}
        </select>

        {/* <Assign id={setSelectedEmployee.id} /> */}
        <Assign id={Number(1)} />
      </>
    )
  }
}

export default EmployeeList
