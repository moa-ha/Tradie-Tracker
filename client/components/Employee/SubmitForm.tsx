import { FormEvent, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Job } from '../../../models/jobs'
import { useSubmitJob } from '../../hooks/useJobs'

type Props = {
  data: Job
}

function SubmitForm(props: Props) {
  const { data } = props
  const jobId = Number(useParams().jobId)
  const employeeId = Number(useParams().employeeId)

  const [formState, setFormState] = useState({
    id: jobId,
    title: data.title,
    description: data.description,
    location: data.location,
    date: data.date,
    time: data.time,
    complete: data.complete,
    quotation: data.quotation,
    manhour: data.manhour,
    review: data.review,
    employee_id: employeeId,
    client_id: data.client_id,
    manager_id: data.manager_id,
  })

  const navigate = useNavigate()
  const mutation = useSubmitJob()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  function handleRadioChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value === 'true' }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    mutation.mutate(formState)
    navigate(`/employee/${employeeId}/schedule`)
  }

  return (
    <>
      <div className="job-card">
        <form onSubmit={handleSubmit}>
          Job Title:
          <input
            value={data.title}
            readOnly
            className="read-only"
            type="text"
            name="title"
          />
          Location:
          <input
            value={data.location}
            readOnly
            className="read-only"
            type="text"
            name="location"
          />
          Date:
          <input
            value={data.date}
            readOnly
            className="read-only"
            type="text"
            name="date"
          />
          <p>How did it go?</p>
          <textarea
            className="display-size"
            onChange={(e) =>
              setFormState({ ...formState, description: e.target.value })
            }
            // value={formState.review}
            name="review"
            placeholder="Enter review or add more job detail"
          />
          <br />
          Worked Hours:
          <input
            onChange={handleChange}
            value={formState.manhour}
            type="number"
            name="manhour"
            placeholder="Enter worked hours"
          />
          <br />
          {/* New radio button for job completion */}
          <div>
            <label>
              <input
                type="radio"
                name="complete"
                value="true"
                checked={formState.complete === true}
                onChange={handleRadioChange}
              />
              Complete
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="complete"
                value="false"
                checked={formState.complete === false}
                onChange={handleRadioChange}
              />
              Incomplete
            </label>
          </div>
          {/* End of radio button */}
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default SubmitForm
