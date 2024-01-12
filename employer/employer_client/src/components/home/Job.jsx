import { useNavigate,Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import '../../styles/home/job.css'

function Job({job}) {

  const {employee} = useAuthContext()
  const navigate = useNavigate()
  

  const applyPage = (id) =>{
    if(!employee){
      navigate(`employee/login?redirect=${id}`)
      localStorage.setItem('jobid', id)
    }else{
      navigate(`employee/dashboard/job/apply/${id}`)
    }
  }
  
  
    return (
      <>
      {
        job ? 
        (<div className='job'>
        <div className="top">
          <h1 style={{marginBottom:'6px'}}> {job.title} </h1>
          <Link to='/employer/profile/bdhdajjh'><h3 style={{color: 'blue'}}> {job.company} </h3></Link>
          <h4> {job.location} </h4>
          <div style={{display:"flex"}}>
          <h5 style={{backgroundColor: 'dodgerblue', color: 'white', padding: '5px',margin: '5px 0px', marginLeft: '0px', letterSpacing:'0.1rem'}}>R {job.salary}</h5>
          <h5 style={{backgroundColor: 'dodgerblue', color: 'white', padding: '5px',margin: '5px 5px',letterSpacing:'0.1rem'}}>{job.jobType}</h5>
          </div>
          <button onClick={() => applyPage(job._id)} className="applyNow">APPLY NOW</button>
        </div>
        <div className="bottom">
          <div className="jobDetails">
            <h3>JOB DETAILS</h3>
            <div className="salary">
              <h5>Salary</h5>
              <p>R{job.salary} a month</p>
            </div>
            <div className="jobType">
              <h5>Job Type</h5>
              <p>{job.jobType}</p>
            </div>
            <div className="setupType">
              <h5>Job setup</h5>
              <p>{job.setUp}</p>
            </div>
          </div>
          <div  className="jobDescription">
            <h3>FULL JOB DESCRIPTION</h3>
            <h5>{job.shortDescription}</h5>
            <p>{job.description}</p>
          </div>
          <div className="duties">
            <h3>DUTIES:</h3>
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
            <h3>REQUIREMENTS:</h3>
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
          <div className="hiringInsights">
            <h3>Hiring {job.noOfCandidates} employees for this job</h3>
          </div>
        </div>
      </div>
        )
         : ''
      }
      </>
    )
  }
  
  export default Job