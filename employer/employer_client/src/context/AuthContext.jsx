import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type){
        case 'EMPLOYEE_LOGIN':
            return {...state, employee : action.payload}
        case 'EMPLOYEE_LOGOUT':
            return {...state, employee : null}
        case 'EMPLOYER_LOGIN':
            return {...state, employer : action.payload}
        case 'EMPLOYER_LOGOUT':
            return {...state, employer : null}
        case 'SETCV_STATUS':
                return {...state, cv : action.payload}
        default:
            return state
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch]= useReducer(authReducer,{
        employee: null,
        employer: null,
        cv: false,
    })
    

    useEffect(()=>{
        const employee = JSON.parse(localStorage.getItem('employee'))
        if(employee){
            dispatch({type: 'EMPLOYEE_LOGIN', payload: employee})
        }
        const employer = JSON.parse(localStorage.getItem('employer'))
        if(employer){
            dispatch({type: 'EMPLOYER_LOGIN', payload: employer})
        }
        const cv = JSON.parse(localStorage.getItem('cv'))
        if(cv){
            dispatch({type: 'SETCV_STATUS', payload: true})
        }
    },[])

    console.log('authcontextstate', state)

    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

