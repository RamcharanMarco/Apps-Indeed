import {useState} from 'react'
import {useAuthContext} from './useAuthContext'
import {useNavigate} from 'react-router-dom'
import {BACKEND} from '../api/env'


export const useEmployeeLogin = () =>{


    let params = new URL(document.location).searchParams;
    let redirect = params.get("redirect");

    const [error, setError] = useState(null)
    const [isloading, setIsLoading] = useState(false)

    const {dispatch}  = useAuthContext()

    const navigate= useNavigate()

    const login = async(email,password) =>{
        setIsLoading(true)
        setError(null)
        const response = await fetch(`${BACKEND}/api/auth/employee/login`, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
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
            //updarte the auth context
            dispatch({type: 'EMPLOYEE_LOGIN', payload: json})
            setIsLoading(false)
            if(redirect){
                navigate(`/employee/dashboard/job/apply/${redirect}`)
            }else{
                navigate('/employee/dashboard')
            }


        }
    }

    return {login, isloading, error}
}