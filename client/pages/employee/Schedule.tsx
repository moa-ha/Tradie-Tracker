import { useGetSchedule } from '../../hooks/useEmployees'
import { Link, useParams } from 'react-router-dom'
import EmployeeNavBar from '../../components/Employee/EmployeeNavbar'
import MapMarker from '../../components/MapMarker'

function Schedule() {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useGetSchedule(Number(id))
  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error?.message}</p>
  }

  if (data) {
    return (
      <>
        <EmployeeNavBar />
        <div className="layout-jobList">
          <div className="left-content">
            <h1>Current jobs:</h1>

            {data.map((job) => (
              <div className="job-card" key={job.id}>
                <div className="title">{job.title}</div>
                <div>{job.date}</div>
                <div>{job.time}</div>
                <div className="location">{job.location || 'Address'}</div>
                <Link to={`/employee/${id}/${job.id}`}>
                  <button>Submit Completion</button>
                </Link>
              </div>
            ))}
          </div>
          <MapMarker locations={[]} />
        </div>
      </>
    )
  }
}
export default Schedule
