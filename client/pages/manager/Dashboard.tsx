import { Link } from 'react-router-dom'
import ToggleButton from '../../components/ToggleButton'
import { useJobs } from '../../hooks/useJobs'
import Assign from '../../components/Manager/Assign'
import DeleteButton from '../../components/Manager/DeleteButton'
import MapMarker from '../../components/MapMarker'
import ManagerNavbar from '../../components/Manager/ManagerNavBar'

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
                    <button className="dashboard-btn">Edit</button>
                  </Link>
                </div>
                <div>
                  <Assign id={job.id} />
                  <button key={job.employee_id} className="dashboard-btn">
                    ✔️
                  </button>
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
