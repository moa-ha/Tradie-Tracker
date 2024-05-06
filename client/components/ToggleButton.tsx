import { useState } from 'react'
import { Job } from '../../models/jobs'
import { useEmployees } from '../hooks/useEmployees'
import AssignedEe from './Manager/AssignedEe'

interface Props {
  job: Job
}

function ToggleButton({ job }: Props) {
  const [isShow, setIsShow] = useState(false)
  function handleToggle() {
    setIsShow(!isShow)
  }

  const { data } = useEmployees()
  console.log(data)

  return (
    <>
      <button onClick={handleToggle} className="dashboard-btn">
        {isShow ? 'Show less' : 'Show more'}
      </button>

      {isShow && (
        <p className="job-detail">
          <div className="job-description">
            Job Description: {job.description}
          </div>
          <div className="quotation">Quotation: ${job.quotation}</div>
          <div className="complete">Complete? {job.complete ? '⭕️' : '❌'}</div>
          {/* <div> */}
          {/* {if(job.employee_id !==0) {
             return <div>Assigned</div>
            }} */}
          <AssignedEe />
          {/* {job.employee_id !== 0
              ? `Assigned ${job.employee_id}`
              : 'Not yet assigned employee'}
          </div> */}
        </p>
      )}
    </>
  )
}

export default ToggleButton
