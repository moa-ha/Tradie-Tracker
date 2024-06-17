import { FormEvent, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Job } from '../../../models/jobs'
import { useSubmitJob } from '../../hooks/useJobs'

type Props = {
  data: Job
}

function SubmitForm(data: Props) {
  const received = data.data
  const [formState, setFormState] = useState({
    id: received.id,
    manhour: received.manhour,
    complete: received.complete,
    review: received.review,
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
    navigate(`/employee/${received.employee_id}/schedule`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        Job Title:
        <input
          value={received.title}
          readOnly
          className="read-only"
          type="text"
          name="title"
        />
        <br></br>
        Location:
        <input
          value={received.location}
          readOnly
          className="read-only"
          type="text"
          name="location"
        />
        <br></br>
        Date:
        <input
          value={received.date}
          readOnly
          className="read-only"
          type="text"
          name="date"
        />
        <p>How did it go?</p>
        <textarea
          className="display-size"
          onChange={(e) =>
            setFormState({ ...formState, review: e.target.value })
          }
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
    </>
  )
}

export default SubmitForm
