import { Outlet } from 'react-router-dom'
import Welcome from '../components/Welcome'

function Home() {
  return (
    <div className="home">
      <header>
        <h1 className="welcome-heading">Welcome to Tradie Tracker!</h1>
        <br></br>
        <br></br>
        <h2 className="welcome-text">Hammering Out Efficiency</h2>
      </header>
      <h3 className="I-am-text">I am:</h3>
      <main className="welcome">
        <Welcome />
        <Outlet />
      </main>
    </div>
  )
}

export default Home
