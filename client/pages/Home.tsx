import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <div className="header">
        <h1 className="welcome-heading">Welcome to Tradie Tracker!</h1>
        <br></br>
        <br></br>
        <h2 className="welcome-text">Hammering Out Efficiency</h2>
      </div>
      <h3 className="I-am-text">I am:</h3>
      <div className="welcome">
        <Link to="/manager">
          <button className="manager login-button">Manager</button>
        </Link>
        <Link to="/employee/1/schedule">
          <button className="employee login-button">Employee</button>
        </Link>
        <Outlet />
      </div>
    </div>
  )
}

export default Home
