import React, { useState } from 'react'
import NewClient from '../../components/Manager/NewClient'
import OccurringClient from '../../components/Manager/OccurringClient'
import NewJob from '../../components/Manager/NewJob'
import ManagerNavbar from '../../components/Manager/ManagerNavBar'

function CreateJob() {
  const [occurringClient, setOccurringClient] = useState(false)
  // Reset selected company if checkbox is unchecked
  const handleOccurringClientChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setOccurringClient(event.target.checked)
  }

  return (
    <div className="center">
      <ManagerNavbar />
      {/* Occurring Client checkbox */}
      <label className="create-form">
        Occurring Client
        <input
          type="checkbox"
          checked={occurringClient}
          onChange={handleOccurringClientChange}
        />
      </label>
      <br></br>
      {/* Occurring Client TRUE or FALSE*/}
      {occurringClient && <OccurringClient />}
      {!occurringClient && <NewClient />}
      <NewJob />
    </div>
  )
}

export default CreateJob
