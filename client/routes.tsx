import { createRoutesFromElements, Route } from 'react-router-dom'
import Dashboard from './Pages/manager/Dashboard.tsx'
import JobDetail from './Pages/manager/JobDetail.tsx'
import CreateJob from './Pages/manager/CreateJob.tsx'
import Completed from './Pages/manager/Completed.tsx'
import Home from './Pages/Home.tsx'
import Schedule from './Pages/employee/Schedule.tsx'
import Submit from './Pages/employee/Submit.tsx'

export default createRoutesFromElements(
  <Route>
    <Route index element={<Home />} />
    <Route path="/manager" element={<Dashboard />} />
    <Route path="/manager/:id" element={<JobDetail />} />
    <Route path="/manager/create" element={<CreateJob />} />
    <Route path="/manager/completed" element={<Completed />} />
    <Route path="/employee/:id" element={<Schedule />} />
    <Route path="/employee/:id/submit" element={<Submit />} />
  </Route>,
)
