import Welcome from '../components/Welcome'

function Home() {
  return (
    <div className="home">
      <header>
        <h1 className="welcome-heading">Welcome to Tradie Tracker!</h1>
      </header>
      <h2 className="welcome-text">Hammering Out Efficiency</h2>
      <h3 className="I-am-text">I am:</h3>
      <main className="welcome">
        <Welcome />
      </main>
    </div>
  )
}

export default Home
