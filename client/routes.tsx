import { createRoutesFromElements, Route } from 'react-router-dom'
import Dashboard from './pages/manager/Dashboard.tsx'
import JobDetail from './pages/manager/JobDetail.tsx'
import CreateJob from './pages/manager/CreateJob.tsx'
import Completed from './pages/manager/Completed.tsx'
import Home from './pages/Home.tsx'
import Schedule from './pages/employee/Schedule.tsx'
import Submit from './pages/employee/Submit.tsx'
import Login from './pages/employee/Login.tsx'
import Layout from './pages/Layout.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/manager" element={<Dashboard />} />
    <Route path="/manager/:id" element={<JobDetail />} />
    <Route path="/manager/create" element={<CreateJob />} />
    <Route path="/manager/completed" element={<Completed />} />
    <Route path="/employee/:id/schedule" element={<Schedule />} />
    <Route path="/employee/:employeeId/:jobId" element={<Submit />} />
    <Route path="/login" element={<Login />} />
  </Route>,
)
