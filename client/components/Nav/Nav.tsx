import EmployeeNavBar from '../Employee/EmployeeNavbar'
import ManagerNavbar from '../Manager/ManagerNavBar'

function Nav() {
  const user = window.location.pathname
  console.log(user)

  if (user.startsWith('/employee')) {
    return <EmployeeNavBar />
  }

  if (user.startsWith('/manager')) {
    return <ManagerNavbar />
  }
}

export default Nav
