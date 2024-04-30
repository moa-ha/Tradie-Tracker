import { useParams } from 'react-router-dom'
import SubmitForm from '../../components/Employee/SubmitForm'
import { useTask } from '../../hooks/useJobs'
import EmployeeNavBar from '../../components/Employee/EmployeeNavbar'

function Submit() {
  const employeeId = Number(useParams().employeeId)
  const jobId = Number(useParams().jobId)

  const { data, isError, error } = useTask(employeeId, jobId)

  if (isError) {
    return <>error: {error}</>
  }

  if (data) {
    return (
      <>
        <EmployeeNavBar />
        <SubmitForm data={data} />
      </>
    )
  }
}

export default Submit
