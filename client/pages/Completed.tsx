// import { SetStateAction, useState } from 'react'
import { useCompletedJobs } from '../hooks/useJobs'
// import Search from '../Search'
import ManagerNavbar from '../components/Manager/ManagerNavBar'

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
  console.log(data)

  if (data) {
    console.log(data)
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
        <ul key="schedule">
          {data.map((job) => (
            <li key={job.id}>
              {job.title},{job.date},{job.time},{job.location},{job.employee_id}
              ,{job.manhour},{job.complete}
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default Completed
