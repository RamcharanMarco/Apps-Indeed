import {useState} from 'react'
import {useEmployeeLogin} from '../../hooks/useEmployeeLogin'
import '../../styles/auth/employeeLogin.css'

function EmployeeLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

      const {login, error, isLoading} = useEmployeeLogin()

      const handleSubmit = async (e) => {
          e.preventDefault()
          await login(email,password)
      }


    return (
      <div className="employeeloginpage">
          <h1>LOGIN AS  EMPLOYEE</h1>
          <form onSubmit={handleSubmit}>
                  <input placeholder='email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <input placeholder='password' type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button disabled={isLoading}>Login</button>
        {error &&  <div className='error'>
          {error}
        </div> }
          </form>
      </div>
    )
  }
  
  export default EmployeeLogin