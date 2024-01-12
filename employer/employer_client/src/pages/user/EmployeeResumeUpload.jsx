import {useState} from 'react'
import axios from 'axios'
import {useAuthContext} from '../../hooks/useAuthContext'
import {useNavigate} from 'react-router-dom'
import '../../styles/user/employeeResumeUpload.css'
import { BACKEND } from '../../api/env'
function EmployeeResumeUpload() {

    const {employee, dispatch} = useAuthContext()
    const navigate = useNavigate()

    const [cv, setCv] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [opacity, setOpacity] = useState(0)

    const addCv = async(e) =>{
        e.preventDefault()
        const data = {cv, hello: 'hello'}
        try{
            setLoading(true)
            setError(false)
            const res = await axios.post(`${BACKEND}/api/employee/addCvDocument`,data,{
                headers: {
                    'Authorization': `Bearer ${employee.token}`,
                    'Content-Type' : 'multipart/form-data'
                },
            })
              const json = await res.data
              console.log('success', json)
              setError(false)
              dispatch({type: 'SETCV_STATUS', payload: true})
              localStorage.setItem('cv', JSON.stringify(true))
              setOpacity(1)
                navigate('/employee/dashboard/info')
        }catch(error){
            console.log(error)
            setError(true)
        }
        finally{
            setLoading(false)
        }
    }

    return (
      <div className='postresumepage'>
        <div style={{opacity:opacity}} className="cv-confirmation">
            <h5>RESUME SUCESSFULLY UPLOADED</h5>
            <p>you will be redirected to homepage shortly</p>
        </div>
          <div class='hero'>
          <h1>UPLOAD YOUR RESUME</h1>
          <p>show employers your resume</p>
          <p>When you apply for a job your cv will be sent via email</p>
          <p>only pdf accepted</p>
          </div>
          <form>
              <div class='postresume'>
              <div className="input-group">
                  <label>RESUME</label>
                  <input type="file"
                        name='cv'
                        accept=".pdf"
                        className='file'
                        onChange={(e) => setCv(e.target.files[0])}
                  />
              </div>
                  <button disabled={loading} onClick={addCv}>SUBMIT</button>
              </div>
              <div>
                {error & <h1>{error}</h1>}
              </div>
          </form>
      </div>
    )
  }
  
  export default EmployeeResumeUpload
  