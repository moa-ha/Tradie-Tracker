import { Link } from 'react-router-dom'
import logo from '../../styles/images/logo.svg'
import bricksLogo from '../../styles/images/bricks.svg'
import plus from '../../styles/images/plus.svg'
import notify from '../../styles/images/notify.svg'
import complete from '../../styles/images/complete.svg'
import profile from '../../styles/images/profile.svg'

function ManagerNavbar() {
  return (
    <div className="nav-container">
      <div className="manager-bg-color">
        <div className="logo-container">
          <Link className="logo" to={`/`}>
            <img className="crane-logo" alt="logo" src={logo}></img>
            <img className="bricks-logo" alt="logo" src={bricksLogo}></img>
          </Link>
          <Link className="h1-nav-link" to={`/manager`}>
            <h1 className="h1-nav">Tradie Tracker</h1>
          </Link>
        </div>
        <div className="icon-container">
          <Link to={`/manager/create`}>
            <img className="nav-icon" alt="plus-icon" src={plus}></img>
          </Link>
          {/* <Link to={`/notifications`}>
            <img className="nav-icon" alt="notify-icon" src={notify}></img>
          </Link> */}
          <Link to={`/manager/completed`}>
            <img className="nav-icon" alt="complete-icon" src={complete}></img>
          </Link>
          {/* <Link to={`/manager/:id/profile`}>
            <img className="nav-icon" alt="profile-icon" src={profile}></img>
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default ManagerNavbar
