import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <>
      <Link to="/manager">
        <button className="manager login-button">Manager</button>
      </Link>
      <Link to="/employee/1/schedule">
        <button className="employee login-button">Employee</button>
      </Link>
    </>
  )
}

export default Welcome
