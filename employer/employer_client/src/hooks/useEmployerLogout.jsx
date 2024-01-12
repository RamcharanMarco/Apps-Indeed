import {useAuthContext} from './useAuthContext'
import {useNavigate} from 'react-router-dom'

export const useLogout = () =>{

    const {dispatch} = useAuthContext()
    const navigate = useNavigate()

    const logout = () =>{
    //remove user form storage
        localStorage.removeItem('employer')
        dispatch({type:'EMPLOYER_LOGOUT'})
        console.log(localStorage.getItem('employer'))
        navigate('/employer/login')
    }


    return {logout}  
}