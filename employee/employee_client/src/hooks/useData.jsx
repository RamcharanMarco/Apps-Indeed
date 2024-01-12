import {useState} from 'react'
import {useAuthContext} from './useAuthContext'
import {useParams} from 'react-router-dom'
import { BACKEND } from '../api/env'


export const usePostJob = () =>{
    const user = useAuthContext()

    const postjob = async(company, title, location, shortDescription, 
        description, salary, jobType,
        noOfCandidates, setUp, duties,
        requirements, category) =>{
        setIsLoading(true)
        setError(null)
        const response = await fetch(`${BACKEND}/api/employer/jobs/create`, {
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

    return {postjob, isloading, error}
}