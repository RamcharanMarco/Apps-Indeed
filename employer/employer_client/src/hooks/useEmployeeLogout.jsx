import {useAuthContext} from './useAuthContext'
import {useNavigate} from 'react-router-dom'


export const useLogout = () =>{

    const {dispatch} = useAuthContext()
    const navigate = useNavigate()

    const logout = () =>{
    //remove user form storage
    localStorage.removeItem('employee')
        dispatch({type:'EMPLOYEE_LOGOUT'})
        dispatch({type: 'SETCV_STATUS', payload: false})
        localStorage.removeItem('cv')
        navigate('/employee/login')
    }

    return {logout}
}