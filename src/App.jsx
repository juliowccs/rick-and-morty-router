import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <div>
        <img src='images/rick-and-morty.png' 
        className='main-image'></img>
        <div className='flexapp'>
          <Link to='/'>Home</Link>
          <Link to='/sobre'>Sobre</Link>
        </div>
        <Outlet/>
      </div>
    </>
  )
}

export default App
