import { Link } from 'react-router-dom'
import ToggleButton from '../../components/ToggleButton'
import { useJobs } from '../../hooks/useJobs'
import Assign from '../../components/Manager/Assign'
import DeleteButton from '../../components/Manager/DeleteButton'
import MapMarker from '../../components/MapMarker'
import ManagerNavbar from '../../components/Manager/ManagerNavBar'
import EmployeeList from '../../components/Manager/EmployeeList'

function Dashboard() {
  const { data, isLoading, isError, error } = useJobs()

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error?.message}</p>
  }

  if (data) {
    return (
      <>
        <ManagerNavbar />
        <div className="layout-jobList">
          <div className="left-content">
            <h1>Job Dashboard</h1>
            {data.map((job) => (
              <div className="job-card" key={job.id}>
                <div className="title">{job.title}</div>
                <div>{job.date}</div>
                <div>{job.time}</div>
                <div className="location">{job.location || 'Address'}</div>
                <div>
                  <DeleteButton id={job.id} />
                  <Link to={`/manager/${job.id}`}>
                    <button className="dashboard-btn">Check Detail</button>
                  </Link>
                </div>
                <div>
                  <EmployeeList id={job.id} />
                </div>
                <ToggleButton job={job} />
              </div>
            ))}
          </div>
          <MapMarker locations={[]} />
        </div>
      </>
    )
  }
}

export default Dashboard
