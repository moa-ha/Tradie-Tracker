import { createRoutesFromElements, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard.tsx'
import JobDetail from './pages/JobDetail.tsx'
import CreateJob from './pages/CreateJob.tsx'
import Completed from './pages/Completed.tsx'
import Home from './pages/Home.tsx'
export default createRoutesFromElements(
  <Route>
    <Route index element={<Home />} />
    <Route path="/manager" element={<Dashboard />} />
    <Route path="/manager/:id" element={<JobDetail />} />
    <Route path="/manager/create" element={<CreateJob />} />
    <Route path="/manager/completed" element={<Completed />} />
  </Route>,
)
