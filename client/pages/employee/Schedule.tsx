import { FormEvent, useState } from 'react'

import { useAddReview, useAllJobsByEmpId } from '../../hooks/useJobs'
import { Link, useParams } from 'react-router-dom'
import EmployeeNavBar from '../../components/Employee/EmployeeNavbar'
import MapMarker from '../../components/MapMarker'

// import { useAllJobsByEmpId } from '../../hooks/useJobs'
// import { Link, useParams } from 'react-router-dom'

function Schedule() {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useAllJobsByEmpId(Number(id))
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
        <EmployeeNavBar />
        <h1>Current jobs:</h1>
        <ul key="schedule">
          {data.map((job) => (
            <li key={job.id}>
              {job.title}, {job.date}, {job.time}, {job.location}
              <Link to={`/jobs/employee/${id}/${job.id}`}>
                <button>Submit Job</button>
              </Link>
            </li>
          ))}
        </ul>
        <MapMarker locations={[]} />
      </>
    )
  }
}
export default Schedule
