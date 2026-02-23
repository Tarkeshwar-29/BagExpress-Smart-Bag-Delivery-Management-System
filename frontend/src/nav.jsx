import homeLogo from './assets/logo.png'
import './nav.css'

function Navbar() {
  return (
    <nav>
      <div>
        <a href='#' id='nav-title'>
            <img className='logo' src={homeLogo}/>
            <h1>PackGo</h1>    
        </a>  
      </div>  
    </nav>
  )
}

export default Navbar