import { NavLink, Link } from "react-router-dom"
import { useLogout } from "../../hooks/useEmployeeLogout"
import {useAuthContext} from '../../hooks/useAuthContext'


function EmployeeNavbar() {

  const {logout} = useLogout()
  const {cv} = useAuthContext()

  const handleClick = () =>{
    logout()
  }

  return (
    <nav className='nav'>
        <Link to='/employee/dashboard'><h1>INDEED EMPLOYEE</h1></Link>
        <div className='links'>
            <Link to='/'>JOBS</Link>
            <NavLink to='/employee/dashboard/info'>YOUR INFO</NavLink>
            <button onClick={handleClick}>Logout</button>
        </div>
    </nav>
  )
}

export default EmployeeNavbar