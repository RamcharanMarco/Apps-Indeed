import '../../styles/employer/employerProfile.css'
import { Link } from 'react-router-dom'

const EmployerProfile = () => {
  return (
    <div className="employerProfile">
        <Link to='/'>go back</Link>
        <h1>employerProfile</h1>
        <ul>
            <li>this will have the emplyer profile pic</li>
            <li>compnay name</li>
            <li>the reviews</li>
            <li>the no of jobs they have listed</li>
            <li>address</li>
            <li>website</li>
        </ul>
        <div>
            <h1>reviews</h1>
            <ul>
                <li>reviews by people who work for this company</li>
            </ul>
            <ul>
                <li>u can write a review</li>
            </ul>
        </div>
    </div>
  )
}

export default EmployerProfile