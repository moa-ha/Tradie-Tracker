// import { SetStateAction, useState } from 'react'
import { useCompletedJobs } from '../../hooks/useJobs'
// import Search from '../Search'
import ManagerNavbar from '../../components/Manager/ManagerNavBar'

function Completed() {
  const { data, isLoading, isError, error } = useCompletedJobs()

  // const [search, setSearch] = useState('')

  // const handleSearchChange = (event: {
  //   target: { value: SetStateAction<string> }
  // }) => {
  //   setSearch(event.target.value)
  // }

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error?.message}</p>
  }

  if (data) {
    // Filter jobs based on the job title
    // data.filter((job) => job.title.toLowerCase().includes(search.toLowerCase()))

    return (
      <>
        <ManagerNavbar />
        <h1>Completed Jobs</h1>
        {/* <div>
          <Search
            search={search}
            setSearch={setSearch}
            onChange={handleSearchChange}
          />
        </div> */}
        <ul>
          {data.map((job) => (
            <div className="job-card" key={job.id}>
              <div className="title">{job.title}</div>
              <div>{job.date}</div>
              <div>Working hours: {job.manhour}</div>
              <div className="review">{job.review}</div>
              <div className="location">{job.location || 'Address'}</div>
            </div>
          ))}
        </ul>
      </>
    )
  }
}

export default Completed
