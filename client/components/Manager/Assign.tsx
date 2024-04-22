import { useState } from 'react'
import { useJobById } from '../../hooks/useJobs'

// import { useJobById } from '../../hooks/useJobs'

const employees = [
  { id: 1, name: 'Samtheman' },
  { id: 2, name: 'Lucas' },
  { id: 3, name: 'Lionel Messi' },
]

interface Id {
  id: number
}
function Assign({ id }: Id) {
  const { data, isLoading, isError, error } = useJobById(id)
  const [selectedEmployee, setSelectedEmployee] = useState<number | null>(null)

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error?.message}</p>
  }

  const handleAssignEmployee = (jobId: number, employeeId: number | null) => {
    // Your logic to assign the selected employee to the job
    console.log(`Assign employee ${employeeId} to job ${jobId}`)
  }

  if (data) {
    return (
      <>
        {/* Dropdown to select employee */}
        <select
          value={selectedEmployee ?? data.employee_id}
          onChange={(e) => setSelectedEmployee(parseInt(e.target.value))}
        >
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.name}
            </option>
          ))}
        </select>
      </>
    )
  }
}

export default Assign
