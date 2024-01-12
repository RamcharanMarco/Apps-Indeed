import {Link} from 'react-router-dom'
import '../../styles/user/employeeHome.css'
import {useAuthContext} from '../../hooks/useAuthContext'


function EmployeeHome() {

  const {employee, cv} = useAuthContext()

  return (
    <div className="employeeHome">
      <div className='employeename'>
        <h1 className='headin'>{employee.user.email ? employee.user.email : ''}</h1>
      </div>
      <div className="content">
        {
          cv ? 
          <div>
          <h1 className='headin'>YOUR RESUME IS UPLOADED</h1>
          <p>you can apply for jobs now</p>
        </div>
        :
        <div>
        <h1 className='headin'>UPLOAD YOUR RESUME</h1>
        <Link className='hiddenLink' to='/employee/dashboard/addResume'>UPLOAD YOUR RESUME</Link>
      </div>
        }
        <div className="port">
        <h1>create your indeed portfolio</h1>
        <p>you can apply for jobs with this instead of uploading your pdf cv</p>
        <Link to='/employee/dashboard/portfolio'>create your indeed portfolio</Link>
        </div>
        <div>
          <h1 className='headin'>MY INFO</h1>
          <Link className='hiddenLink' to='/employee/dashboard/info'>MY INFO</Link>
      </div>
    </div>
    </div>
  )
}


export default EmployeeHome
