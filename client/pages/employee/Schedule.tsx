import { useGetSchedule } from '../../hooks/useEmployees'
import { Link, useParams } from 'react-router-dom'
// import MapMarker from '../../components/MapMarker'
import map from '../../styles/images/map_employee1.png'

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
        <div className="layout-jobList">
          <div className="left-content">
            <h1>Schedule:</h1>
            {data.map((job) => (
              <div className="job-card" key={job.id}>
                <div className="title">{job.title}</div>
                <div>{job.date}</div>
                <div>{job.time}</div>
                <div className="location">{job.location || 'Address'}</div>
                <Link to={`/employee/${id}/${job.jobId}`}>
                  <button>Submit Completion</button>
                </Link>
              </div>
            ))}
          </div>
          {/* <MapMarker locations={[]} /> */}
          <img
            id="map"
            style={{ width: '500px', height: '500px' }}
            alt="logo"
            src={map}
          ></img>
        </div>
      </>
    )
  }
}
export default Schedule
