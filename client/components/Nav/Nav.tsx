import EmployeeNavBar from './EmployeeNavbar'
import ManagerNavbar from './ManagerNavBar'

function Nav() {
  const user = window.location.pathname

  if (user.startsWith('/employee') || user.startsWith('/jobs')) {
    return <EmployeeNavBar />
  } else if (user.startsWith('/manager')) {
    return <ManagerNavbar />
  } else {
    return null
  }
}

export default Nav
