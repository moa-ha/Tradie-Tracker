import { createRoutesFromElements, Route } from 'react-router-dom'
import Home from './components/Home.tsx'
import Dashboard from './pages/Dashboard.tsx'
export default createRoutesFromElements(
  <Route>
    <Route index element={<Home />} />
    <Route path="/manager" element={<Dashboard />} />
  </Route>,
)
