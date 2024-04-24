import { useState, FormEvent } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Job } from '../../../models/jobs'
import { useEditJobById } from '../../hooks/useJobs'

type Props = {
  data: Job
}

function Form(props: Props) {
  const { data } = props
  const id = Number(useParams().id)

  const [formState, setFormState] = useState({
    id: id,
    title: data.title,
    description: data.description,
    location: data.location,
    date: data.date,
    time: data.time,
    complete: data.complete,
    quotation: data.quotation,
    manhour: data.manhour,
    review: data.review,
    employee_id: data.employee_id,
    client_id: data.client_id,
    manager_id: data.manager_id,
  })

  const navigate = useNavigate()
  const mutation = useEditJobById()
  function handleClick(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    mutation.mutate(formState)
    navigate('/manager')
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <form onSubmit={handleClick}>
        Job Title:
        <input
          onChange={handleChange}
          value={data.title}
          type="text"
          name="title"
          placeholder={data.title}
        />
        <br></br>
        Due Date:
        <input
          onChange={handleChange}
          value={data.date}
          type="date"
          name="date"
          placeholder={data.date}
        />
        <br></br>
        Time:
        <input
          onChange={handleChange}
          value={data.time}
          type="time"
          name="time"
          placeholder={data.date}
        />
        <br></br>
        Location:
        <input
          onChange={handleChange}
          value={data.location}
          type="text"
          name="location"
          placeholder={data.location}
        />
        <br></br>
        Description:
        <textarea
          className="display-size"
          onChange={(e) =>
            setFormState({ ...formState, description: e.target.value })
          }
          value={data.description}
          name="description"
          placeholder={data.description}
        />
        <br></br>
        Quotation:
        <input
          onChange={handleChange}
          value={data.quotation}
          type="number"
          name="quotation"
          // placeholder={data.quotation}
        />
        <br></br>
        <button type="submit">save</button>
      </form>
    </>
  )
}
export default Form
