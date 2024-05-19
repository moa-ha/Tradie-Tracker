import { Link } from 'react-router-dom'
import ToggleButton from '../../components/ToggleButton'
import { useJobs } from '../../hooks/useJobs'
import DeleteButton from '../../components/Manager/DeleteButton'
import MapMarker from '../../components/MapMarker'
import Assign from '../../components/Manager/Assign'
// import map from '../../styles/images/map.png'

function Dashboard() {
  const { data, isLoading, isError, error } = useJobs()

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: getting error! {error?.message}</p>
  }

  if (data) {
    return (
      <>
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
                  <Assign id={job.id} />
                </div>
                <ToggleButton job={job} />
              </div>
            ))}
          </div>
          <MapMarker locations={[]} />
          {/* <img
            id="map"
            style={{ width: '500px', height: '500px' }}
            alt="logo"
            src={map}
          ></img> */}
        </div>
      </>
    )
  }
}

export default Dashboard
