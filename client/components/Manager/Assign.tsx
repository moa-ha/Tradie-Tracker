import { useState } from 'react'
import EmployeeList from './EmployeeList'
import { useJobById, useEditJobById } from '../../hooks/useJobs'

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

  const handleClick = () => {
    mutation.mutate()
  }

  if (data) {
    return (
      <button onClick={handleClick} className="dashboard-btn">
        ✔️
      </button>
    )
  }
}

export default Assign
