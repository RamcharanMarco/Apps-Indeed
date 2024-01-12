import {useState, useState} from 'react'
import {useAuthContext} from './useAuthContext'
import {useNavigate} from 'react-router-dom'


export const usePostJob = () =>{
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')
    const {employer} = useAuthContext()
    const navigate = useNavigate()

    const postjob = async(company, title, location, shortDescription, 
        description, salary, jobType,
        noOfCandidates, setUp, duties,
        requirements, category) =>{
        setIsLoading(true)
        setError(null)
        const response = await fetch('http://localhost:5000/api/employer/jobs/create', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${employer.token}`
              },
            body: JSON.stringify({company, title, location, shortDescription, 
                description, salary, jobType,
                noOfCandidates, setUp, duties,
                requirements, category})
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            //save user to local storage
            setIsLoading(false)
            navigate('/employer/dashboard/vacancies')

        }
    }

    useEffect(() =>{
        postjob()
    },[])

    return {fetchdata,loading, error, data}
}