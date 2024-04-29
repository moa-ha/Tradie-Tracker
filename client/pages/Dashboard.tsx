import { Link } from 'react-router-dom'
import ToggleButton from '../components/ToggleButton'
import { useJobs } from '../hooks/useJobs'
import Assign from '../components/Manager/Assign'
import DeleteButton from '../components/Manager/DeleteButton'
import MapMarker from '../components/MapMarker'
import ManagerNavbar from '../components/Manager/ManagerNavBar'

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
                <div className="date">{job.date}</div>
                <div className="time">{job.time}</div>
                <div className="location">{job.location || 'Address'}</div>
                <ToggleButton job={job} />
                <div className="edit">
                  <Link to={`/manager/${job.id}`}>
                    <button className="dashboard-btn">Edit</button>
                  </Link>

                  <DeleteButton id={job.id} />
                </div>
                {/* <Assign id={job.id} /> */}
                {/* <div className="assign">
                  <button key={job.employee_id}>Assign</button>
                </div> */}
                <div className="date">{job.date}</div>
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
