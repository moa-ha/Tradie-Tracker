import { useParams } from 'react-router-dom'
import SubmitForm from '../../components/Employee/SubmitForm'
import { useJobById } from '../../hooks/useJobs'

function Submit() {
  const id = Number(useParams().id)
  console.log('getting id correct: ' + id)

  const { data, isError, error } = useJobById(id)

  if (isError) {
    return <>error: {error}</>
  }

  if (data) {
    return (
      <div className="layout">
        <SubmitForm data={data} />
      </div>
    )
  }
}

export default Submit
