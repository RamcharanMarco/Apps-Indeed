import { useParams, Link, useNavigate} from "react-router-dom";
import {useAuthContext} from '../../hooks/useAuthContext'
import {useState, useEffect, useCallback} from 'react'
import '../../styles/user/applyJob.css'
import { BACKEND } from "../../api/env";

const ApplyJob = () => {

    const {id} = useParams()
    const {employee, cv} = useAuthContext()
    const navigate = useNavigate()

    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [error2, setError2] = useState(false)
    const [opacity, setOpacity] = useState(0)
  
  
    const getJob = useCallback( async () => {
      setLoading(true)
      setError(null)
      const response = await fetch(`localhost:5000/api/employee/job/jobinfo/${id}`, {
          headers: {
              'Authorization' : `Bearer ${employee.token}`
            }
      })
  
      const json = await response.json()
  
      if(!response.ok){
        setLoading(false)
        setError(true)
    }
    if(response.ok){
        setLoading(false)
        setJob(json)
    }
    },[employee, id])
  
  
    useEffect( ()=>{
      getJob()
    },[getJob])



    const applyJob = async() =>{

        setLoading2(true)
        setError2(null)

        try{
        const response = await fetch(`${BACKEND}/api/employee/apply/job/${job._id}/${job.company_id}`,{
            headers: {'Authorization' : `Bearer ${employee.token}`}
        })
        const json = await response.json()
            console.log(json)
            setLoading2(false)
            setOpacity(1)
            setTimeout(()=>{
                navigate('/')
            },1000)
        }catch(error){
            setError2(error.message)
            console.log(error)
            setLoading2(false)
        }
    }




    return (
        <div className="applyJob">
            {
                loading && <h1>loading</h1>
            }
            {
                error && <h1>we have an error</h1>
            }
            {
                job && (
                    <div className='jobDetails'>
                        <h2>JOB DETAILS</h2>
                        <div className="detail-box">
                            <h4>TITLE</h4>
                            <p>{job.title}</p>
                        </div>
                        <div className="detail-box">
                            <h4>COMPANY</h4>
                            <p>{job.company}</p>
                        </div>
                        <div className="detail-box">
                            <h4>LOCATION</h4>
                            <p>{job.location} </p>
                        </div>
                        <div className="detail-box">
                            <h4>SALARY</h4>
                            <p>R {job.salary}</p>
                        </div>
                        <div className="detail-box">
                            <h4>JOBTYPE</h4>
                            <p>{job.jobType}</p>
                        </div>
                        <div className="detail-box">
                            <h4>SETUP</h4>
                            <p>{job.setUp}</p>
                        </div>
                        <div className="detail-box">
                            <h4>SHORT DESRCIPTION</h4>
                            <p>{job.shortDescription}</p>
                        </div>
                        <div className="duties">
                            <h3>DUTIES</h3>
                            <ul>
                                {
                                job && job.duties.map(duty => {
                                    return(
                                    <li>{duty}</li>
                                    )
                                })
                                }
                            </ul>
                        </div>
                        <div className="requirements">
                            <h3>REQUIREMENTS</h3>
                            <ul>
                                {
                                job && job.requirements.map(req => {
                                    return(
                                    <li>{req}</li>
                                    )
                                })
                                }
                            </ul>
                        </div>
                        <div className="detail-box">
                            <h4>NO OF CANDIDIATES</h4>
                            <p>hiring {job.noOfCandidates}</p>
                        </div>
                        <h1>how do you want to apply for this job</h1>
                        <ul>
                            <li>email directly</li>
                            <li>let indeed email your resume document</li>
                            <li>with your indeed porfolio, employer will see taht you applie don their homepage</li>
                        </ul>
                        <div>
                            <h1>more jobs form this employer</h1>
                            <h1>more jobs like this</h1>
                        </div>
                    </div>
                )
            }
            {
                cv && (
                    <div className="applyJobLink">
                        <h1>apply for this job</h1>
                        <p>Your cv will be sent via email</p>
                        <h1>or</h1>
                        <p>you can apply via your indeed portfolio</p>
                        <button>apply via portfolio</button>
                        <button onClick={applyJob}>apply now</button>
                        {
                            loading2 && <h1>...applying for job</h1>
                        }
                        {
                            error2 && <h1>{error2}</h1>
                        }
                    </div>
                )
            }
            {
                !cv && (
                    <div className="uploadCv">
                        <h1>You havent uploaded your cv yet</h1>
                        <p>follow link to upload cv</p>
                        <Link to='/employee/dashboard/addResume'>upload page</Link>
                    </div>
                )
            }
            <div style={{opacity: opacity}} className="confirmationDiv">
                <h1>YOU HAVE SUCCESSFULLY APPLIED TO THIS JOB</h1>
            </div>
        </div>
     );
}
 
export default ApplyJob;