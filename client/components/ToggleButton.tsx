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

  return (
    <>
      <button onClick={handleToggle} className="dashboard-btn">
        {isShow ? 'Show less' : 'Show more'}
      </button>

      {isShow && (
        <div className="job-detail">
          <div className="job-description">
            Job Description: {job.description}
          </div>
          <div className="quotation">Quotation: ${job.quotation}</div>
          <div className="complete">Complete? {job.complete ? '⭕️' : '❌'}</div>
        </div>
      )}
    </>
  )
}

export default ToggleButton
