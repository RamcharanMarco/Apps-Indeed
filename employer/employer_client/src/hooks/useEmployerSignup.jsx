import {useState} from 'react'
import {useAuthContext} from './useAuthContext'
import {useNavigate} from 'react-router-dom'
import {BACKEND} from '../api/env'

export const useEmployerSignup = () =>{
    const [error, setError] = useState('')
    const [isloading, setIsLoading] = useState('')

    const {dispatch}  = useAuthContext()
    const navigate = useNavigate()

    const signup = async(email,password,companyName, fullName, contactNumber, role) =>{
        setIsLoading(true)
        setError(null)
        const response = await fetch(`${BACKEND}/api/auth/employer/create`, {
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email, password,companyName, fullName, contactNumber, role})
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            
            //save user to local storage
            localStorage.setItem('employer', JSON.stringify(json))
            localStorage.removeItem('employee')

            //updarte the auth context
            dispatch({type: 'EMPLOYER_LOGIN', payload: json})

            setIsLoading(false)

            navigate('/employer/dashboard')

        }
    }

    return {signup, isloading, error}
}