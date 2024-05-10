import { useParams } from 'react-router-dom'
import SubmitForm from '../../components/Employee/SubmitForm'
import { useTask } from '../../hooks/useJobs'

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
        <SubmitForm data={data} />
      </>
    )
  }
}

export default Submit
