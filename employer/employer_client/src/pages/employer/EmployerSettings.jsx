import { useAuthContext } from '../../hooks/useAuthContext';
import {useNavigate} from 'react-router-dom'
import '../../styles/employer/employerSettings.css'
import { useState } from 'react';
import {BACKEND} from '.././../api/env'

function EmployerSettings() {

  const {employer, dispatch} = useAuthContext()
  const navigate = useNavigate()
  const [name, setName] = useState(employer.user.companyName)
  const [fullname, setFullname] = useState(employer.user.fullName)
  const [role, setRole] = useState(employer.user.role)
  const [contactNumber, setContactNumber] = useState(employer.user.contactNumber)
  const [edit, setEdit] = useState(false)





  const deleteEmployer = async () =>{
    const response = await fetch(`${BACKEND}/api/auth/delete/employer`,{
      method : 'DELETE',
      headers:{
        'Authorization' : `Bearer ${employer.token}`
      }
    })
    const json = await response.json()
    if(response.ok){
      dispatch({type: 'EMPLOYER_LOGOUT'})
      console.log(json)
      navigate('/employer/login')
      localStorage.removeItem('employer')
    }
  }


  let toggle = (e) =>{
    e.preventDefault()
    setEdit(!edit)
  }

  return (
    <div className="employerSettings">
      <div className="left">
        {
          edit ? <div className='empsetnav'>
          <button onClick={toggle}>cancel</button>
          <button>save</button>
          </div>
          :
          <div className="empsetnav"><button onClick={toggle}>edit</button></div>
        }
        <div className="employerInfo-group">
          <h3>COMPANY NAME</h3>
          <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="employerInfo-group">
          <h3>USER NAME</h3>
          <input type="text" placeholder='fullname' value={fullname} onChange={(e) => setFullname(e.target.value)}/>
        </div>
        <div className="employerInfo-group">
          <h3>EMAIL</h3>
          <input type="text" value={employer.user.email}/>
        </div>
        <div className="employerInfo-group">
          <h3>RECRUITMENT TYPE</h3>
          <input type="text" placeholder='role' value={role} onChange={(e) => setRole(e.target.value)}/>

        </div>
        <div className="employerInfo-group">
          <h3>CONTACT NUMBER</h3>
          <h2>{employer && employer.user.contactNumber}</h2>
          <input type="text" placeholder='number' value={contactNumber} onChange={(e) => setContactNumber(e.target.value)}/>

        </div>
        {
          edit ? null 
          :
          <>
                  <button>logout</button>
        <button onClick={deleteEmployer} >delete account</button>
          </>
        }
      </div>
      <div className="pic">
          <label>upload your pic</label>
          <input type="file" />
          <button>save picture</button>

        </div>
    </div>
  )
}

export default EmployerSettings
