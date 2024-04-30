import { useParams } from 'react-router-dom'
import SubmitForm from '../../components/Employee/SubmitForm'
import { useGetScheduleById, useSubmitJob } from '../../hooks/useJobs'
import EmployeeNavBar from '../../components/Employee/EmployeeNavbar'

function Submit() {
  const { id } = useParams()
  const { data, isError, error } = useGetScheduleById(Number(id))

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
