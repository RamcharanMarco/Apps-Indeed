import {useState} from 'react'
import {useAuthContext} from './useAuthContext'
import {useNavigate} from 'react-router-dom'
import {BACKEND} from '../api/env'

export const useEmployeeSignup = () =>{
    const [error, setError] = useState('')
    const [isloading, setIsLoading] = useState('')

    const {dispatch}  = useAuthContext()
    const navigate = useNavigate()

    const signup = async(email,password) =>{
        setIsLoading(true)
        setError(null)
        const response = await fetch(`${BACKEND}/api/auth/employee/create`, {
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){

            //save user to local storage
            localStorage.setItem('employee', JSON.stringify(json))
            localStorage.removeItem('employer')

            //updarte the auth context
            dispatch({type: 'EMPLOYEE_LOGIN', payload: json})


            navigate('/employee/dashboard')
            setIsLoading(false)
        }
    }

    return {signup, isloading, error}
}