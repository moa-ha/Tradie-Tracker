import { createRoutesFromElements, Route } from 'react-router-dom'
import Home from './components/Home.tsx'
import Dashboard from './pages/Dashboard.tsx'
import JobDetail from './pages/JobDetail.tsx'
import CreateJob from './pages/CreateJob.tsx'
export default createRoutesFromElements(
  <Route>
    <Route index element={<Home />} />
    <Route path="/manager" element={<Dashboard />} />
    <Route path="/manager/:id" element={<JobDetail />} />
    <Route path="/manager/create" element={<CreateJob />} />
  </Route>,
)
