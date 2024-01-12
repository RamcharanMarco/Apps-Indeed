import {useState} from 'react'
import {useAuthContext} from './useAuthContext'
import {Navigate} from 'react-router-dom'
import {BACKEND} from '../api/env'

export const useEmployerLogin = () =>{
    const [error, setError] = useState('')
    const [isloading, setIsLoading] = useState('')

    const {dispatch}  = useAuthContext()

    const login = async(email,password) =>{
        setIsLoading(true)
        setError(null)
        const response = await fetch(`${BACKEND}/api/auth/employer/login`, {
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
            localStorage.setItem('employer', JSON.stringify(json))

            //updarte the auth context
            dispatch({type: 'EMPLOYER_LOGIN', payload: json})

            setIsLoading(false)

            Navigate('/employer/dashboard')

        }
    }

    return {login, isloading, error}
}