import { NavLink, Link } from "react-router-dom"
import { useLogout } from "../../hooks/useEmployeeLogout"
import {useAuthContext} from '../../hooks/useAuthContext'
import '../../styles/navbar/mainNavbar.css'
import {FaUserAstronaut} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'
import 'animate.css'

function MainNavbar({toggle}) {

  const {logout} = useLogout()

  const {employee} = useAuthContext()

  const handleClick = () =>{
    logout()
  }

  return (
    <nav className='nav animate__animated animate__backInLeft'>
        <Link to='/'><h1>INDEED</h1></Link>
        <h1 onClick={toggle} id='mainMenuIcon'><FaBars/></h1>
        <div id='links' className='links'>
        {employee && (
              <div>
                <span>{employee.user.email}</span>
                <button onClick={handleClick}>logout</button>
                <Link className="user-icon" to='/employee/dashboard'><FaUserAstronaut/></Link>
              </div>
              )}
              {!employee && (<div>
            <NavLink to='/signUp'>sign-up</NavLink>
            <NavLink to='/signIn'>sign-in</NavLink>
            <NavLink to='/employer/login'>employers / post job</NavLink>
            </div>
              )
            }
        </div>
    </nav>
  )
}

export default MainNavbar