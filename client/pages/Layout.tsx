import { Outlet, useParams } from 'react-router-dom'
import Nav from '../components/Nav/Nav'

export default function Layout() {
  // this useParams() made it reload so Nav will get the pathname every time new page loads but don't understand how...
  const user = useParams().manager

  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
