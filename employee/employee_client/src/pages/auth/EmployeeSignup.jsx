import {useEmployeeSignup} from '../../hooks/useEmployeeSignup'
import { useState } from 'react'
import '../../styles/auth/employeeSignup.css'

function EmployeeSignup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {signup, isLoading, error} = useEmployeeSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(email,password)
    }

    return (
      <div className='employeeSignupPage'>
          <h1>WELCOME JOB SEEKER</h1>
          <p>Signup and start applying for jobs</p>
          <form onSubmit={handleSubmit}>
                  <input placeholder='email' type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <input placeholder='password' type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <button disabled={isLoading}>SUBMIT</button>
                  {isLoading && <h1>..logginh you in</h1>}
                  {error && <div>{error}</div>}
          </form>
      </div>
    )
  }
  
  export default EmployeeSignup