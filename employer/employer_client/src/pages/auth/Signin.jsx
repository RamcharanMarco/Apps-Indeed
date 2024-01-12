import {NavLink} from 'react-router-dom'
import '../../styles/auth/signin.css'
import 'animate.css'

function Signin() {
  return (
    <div className='signin'>
      <div style={{backgroundColor:'whitesmoke',color: 'black'}}>
        <h1>SIGNIN AS EMPLOYEE</h1>
        <NavLink className='hiddenLink animate__animated animate__slideInUp' to='/employee/login'>SIGNIN</NavLink>
      </div>
      <div style={{backgroundColor:'black',color: 'white'}}>
        <h1>SIGNIN AS EMPLOYER</h1>
        <NavLink style={{backgroundColor:'white',color: 'black'}} className='hiddenLink animate__animated animate__slideInUp' to='/employer/login'>SIGNIN</NavLink>
      </div>
    </div>
  )
}


export default Signin
