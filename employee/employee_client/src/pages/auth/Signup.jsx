import {NavLink} from 'react-router-dom'
import '../../styles/auth/signup.css'
import 'animate.css'

function Signup() {
  return (
    <div className='signup animate__animated animate__backInRight'>
      <div style={{backgroundColor:'whitesmoke',color: 'black'}}>
        <h1>SIGNUP AS EMPLOYEE</h1>
        <NavLink className='hiddenLink animate__animated animate__slideInUp' to='/signup/employee'>SIGNUP</NavLink>
      </div>
      <div style={{backgroundColor:'black',color: 'white'}}>
        <h1>SIGNUP AS EMPLOYER</h1>
        <NavLink style={{backgroundColor:'white',color: 'black'}} className='hiddenLink animate__animated animate__slideInUp' to='/signup/employer'>SIGNUP</NavLink>
      </div>
    </div>
  )
}


export default Signup
