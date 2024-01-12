import { usePostJob } from "../../hooks/usePostJob"
import { useState } from "react"
import {useAuthContext} from '../../hooks/useAuthContext'
import '../../styles/employer/postJob.css'

function PostJob() {

    const {employer} = useAuthContext()

    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [shortDescription, setShortDescription] = useState('')
    const [description, setDescription] = useState('')
    const [salary, setSalary] = useState('')
    const [jobType, setJobType] = useState('')
    const [noOfCandidates, setNoOfCandidates] = useState('')
    const [setUp, setSetUp] = useState('')
    const [duty, setDuty] = useState('')
    const [duties, setDuties] = useState([])
    const [requirement, setRequirement] = useState('')
    const [requirements, setRequirements] = useState([])
    const [category, setCategory] = useState('')

    const {postjob, isLoading, error} = usePostJob()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const company = employer.user.companyName;
        await postjob(company, title, location, shortDescription, 
            description, salary, jobType,
            noOfCandidates, setUp, duties,
            requirements, category )
    }


    const addDuty = (e) =>{
        e.preventDefault()
        setDuties( (prevState) => [...prevState, duty])
        setDuty('')
    }

    const addRequirement = (e) =>{
        e.preventDefault()
        setRequirements( (prevState) => [...prevState, requirement])
        setRequirement('')
    }

    const deleteDuty = (i) =>{
        const newList = duties.filter((dut, index) => i !== index)
        setDuties(newList)
    }

    const deleteReq = (i) =>{
        const newList = requirements.filter((req, index) => i !== index)
        setRequirements(newList)
    }


  return (
    <div className='postjobpage'>
        <h1>POST A JOB</h1>
      <form onSubmit={handleSubmit}>
                <div>
                    <p>title</p>
                    <input type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                />
                </div>
            <div>
                <p>location</p>
                <select value={location} onChange={(e) => setLocation(e.target.value)}>        
                    <option value="kzn">KWA-ZULU NATAL</option>
                    <option value="gauteng">GAUTENG</option>
                    <option value="limpopo">LIMPOPO</option>
                    <option value="mpumalanga">MPUMALANGA</option>
                    <option value="eastern cape">EASTERN CAPE</option>
                    <option value="western cape">WESTERN CAPE</option>
                    <option value="northern cape">NORTHERN CAPE</option>
                    <option value="free state">FREE STATE</option>
                </select>
            </div>
            <div>
                <p>short description</p>
                <input type="text" 
                value={shortDescription} 
                onChange={(e) => setShortDescription(e.target.value)} 
                />
            </div>
            <div>
                <p>full description</p>
                <input type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <p>salary</p>
                <input type="number" 
                value={salary} 
                onChange={(e) => setSalary(e.target.value)}
                />
            </div>
            <div>
                <p>job type</p>
                <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
                    <option value="">select a job type</option>
                    <option value="full_time">FULL TIME</option>
                    <option value="temporary">TEMPORARY</option>
                </select>
            </div>
            <div>
                <p>no of candidates</p>
                <input type="number" 
                value={noOfCandidates} 
                onChange={(e) => setNoOfCandidates(e.target.value)}
                />
            </div>
            <div>
                <p>SETUP TYPE</p>
                <select value={setUp} onChange={(e) => setSetUp(e.target.value)}>
                    <option value="office">WORKPLACE</option>
                    <option value="remote">REMOTE</option>
                </select>
            </div>
            <div>
                <p>DUTIES</p>
                {
                        duties.length !== 0 ?  
                            duties.map((duty, i) => 
                                    <div key={i} className='duty'>
                                    <p>{duty}</p>
                                    <button onClick={() => {deleteDuty(i)}}>DELETE</button>
                                    </div>
                                )   
                        : <p style={{color: 'black',margin: '10px 0px', textAlign:'center'}}>no duties added</p>
                    }
                <input type="text" 
                value={duty} 
                onChange={(e) => setDuty(e.target.value)}
                />
                <button className='add' onClick={addDuty}>add duty</button>
            </div>
            <div>
                <p>REQUIREMENTS</p>
                {
                        requirements.length !== 0 ?  
                            requirements.map((req, i) => 
                                    <div key={i} className='req'>
                                    <p>{req}</p>
                                    <button onClick={() => {deleteReq(i)}}>DELETE</button>
                                    </div>
                                )   
                        : <p style={{color: 'black',margin: '10px 0px', textAlign:'center'}}>no requirements added</p>
                    }
                <input type="text" 
                value={requirement} 
                onChange={(e) => setRequirement(e.target.value)}

                />
                <button className='add' onClick={addRequirement}>add requirement</button>
            </div>
            <div>
                <p>CATEGORY</p>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="finance">FINANCE</option>
                    <option value="admin">ADMIN</option>
                    <option value="technology">TECHNOLOGY</option>
                    <option value="medicine">MEDICINE</option>
                    <option value="healthcare">HEALTHCARE</option>
                    <option value="law">LAW</option>
                    <option value="goverment">GOVERMENT</option>
                </select>
            </div>
                <button  className='submit' disabled={isLoading}>SUBMIT</button>
                {
                    error && 
                    <div  style={{display:'flex', alignItems: 'center', justifyContent: 'center', border:'2px solid aqua'}} className="input-group">
                        <p>{error}</p>
                    </div>
                }
        </form>
    </div>
  )
}

export default PostJob
