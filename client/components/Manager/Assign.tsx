import { useState } from 'react'
import { useEmployees, useJobById } from '../../hooks/useEmployees'
import EmployeeList from './EmployeeList'
import { useEditJobById } from '../../hooks/useJobs'

interface Id {
  id: number
}

function Assign({ id }: Id) {
  const { data, isLoading, isError, error } = useJobById(id)
  const mutation = useEditJobById()

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error?.message}</p>
  }

  const handleAssignEmployee = (jobId: number, employeeId: number | null) => {
    mutation.mutate()
    console.log(`Assign employee ${employeeId} to job ${jobId}`)
  }

  if (data) {
    return (
      <>
        <EmployeeList />
      </>
    )
  }
}

export default Assign
