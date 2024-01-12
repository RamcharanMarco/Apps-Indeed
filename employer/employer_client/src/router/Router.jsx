import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


import MainLayout from '../components/layouts/MainLayout'
import EmployeeLayout from '../components/layouts/EmployeeLayout'
import EmployerLayout from '../components/layouts/EmployerLayout'
import EmployerProfile from '../pages/employer/EmployerProfile'


import EmployerHome from '../pages/employer/EmployerHome'
import PostJob from '../pages/employer/PostJob'
import Vacancies from '../pages/employer/Vacancies'
import VacancyDetailsEmp from '../pages/employer/VacancyDetailsEmp'
import Applicants from '../pages/employer/Applicants'

import EmployerSignup from '../pages/auth/EmployerSignup'
import EmployeeSignup from '../pages/auth/EmployeeSignup'

import  EmployeeResumeUpload from '../pages/user/EmployeeResumeUpload'
import EmployerLogin from '../pages/auth/EmployerLogin'
import EmployeeInfo from '../pages/user/EmployeeInfo'
import EmployeeHome from '../pages/user/EmployeeHome'
import EmployeeLogin from '../pages/auth/EmployeeLogin'
import Portfolio from '../pages/user/Portfolio'

import { useAuthContext } from '../hooks/useAuthContext';
import ApplyJob from '../pages/user/ApplyJob'
import Signin from '../pages/auth/Signin'
import Signup from '../pages/auth/Signup'
import Home from '../pages/home/Home'
import CreatePortfolio from '../pages/user/CreatePortfolio'
import EmployeePortfolio from '../pages/user/EmployeePortolio'
import EmployerSettings from '../pages/employer/EmployerSettings'

const Router = () => {

    const {employee, employer} = useAuthContext()

  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element={<MainLayout/>}>
        <Route index element={employer ? <Navigate to='/employer/dashboard'/> : <Home/>}/>
        <Route path = 'signin' element={employer ? <Navigate to='/employer/dashboard'/> : employee ? <Navigate to='/employee/dashboard'/> : <Signin/>}></Route>
        <Route path = 'signup' element={employer ? <Navigate to='/employer/dashboard'/> : employee ? <Navigate to='/employee/dashboard'/> : <Signup/>}></Route>
        <Route path = 'signup/employer' element={employer ? <Navigate to='/employer/dashboard'/> : employee ? <Navigate to='/employee/dashboard'/> : <EmployerSignup/>}></Route>
        <Route path = 'signup/employee' element={employer ? <Navigate to='/employer/dashboard'/> : employee ? <Navigate to='/employee/dashboard'/> : <EmployeeSignup/>}></Route>
        <Route path = '/employer/login' element={employer ? <Navigate to='/employer/dashboard'/> : employee ? <Navigate to='/employee/dashboard'/> : <EmployerLogin/>}></Route>
        <Route path = '/employee/login' element={employer ? <Navigate to='/employer/dashboard'/> : employee ? <Navigate to='/employee/dashboard'/> : <EmployeeLogin/>}></Route>
    </Route>

    <Route path = '/employer/dashboard/' element={employee ? <Navigate to='/employee/dashboard'/> : employer ? <EmployerLayout/> : <Navigate to='/'/>}>
    <Route index element={employee ? <Navigate to='/employee/dashboard'/> : employer ? <EmployerHome/> : <Navigate to='/'/>}/>
    <Route path = 'postJob' element={employee ? <Navigate to='/employee/dashboard'/> : employer ? <PostJob/> : <Navigate to='/'/>}></Route>
    <Route path = 'settings' element={employee ? <Navigate to='/employee/dashboard'/> : employer ? <EmployerSettings/> : <Navigate to='/'/>}></Route>
    <Route path = 'vacancies' element={employee ? <Navigate to='/employee/dashboard'/> : employer ? <Vacancies/> : <Navigate to='/'/>}></Route>
    <Route path = 'vacancies/:id' element={employee ? <Navigate to='/employee/dashboard'/> : employer ? <VacancyDetailsEmp/> : <Navigate to='/'/>}></Route>
    <Route path = 'applicants' element={employee ? <Navigate to='/employee/dashboard'/> : employer ? <Applicants/> : <Navigate to='/'/>}></Route>
    <Route path = 'employee/profile' element={<EmployeePortfolio/>}/>
  </Route>

  <Route path = '/employee/dashboard/' element={<EmployeeLayout/>}>
    <Route index element={employer ? <Navigate to='/employer/dashboard'/> : employee ? <EmployeeHome/> : <Navigate to='/'/>}/>
    <Route path = 'addResume' element={employer ? <Navigate to='/employer/dashboard'/> : employee ? <EmployeeResumeUpload/> : <Navigate to='/'/>}></Route>
    <Route path = 'info' element={employer ? <Navigate to='/employer/dashboard'/> : employee ? <EmployeeInfo/> : <Navigate to='/'/>}></Route>
    <Route path = 'job/apply/:id' element={employer ? <Navigate to='/employer/dashboard'/> : employee ? <ApplyJob/> : <Navigate to='/'/>}></Route>
    <Route path = 'portfolio' element={employer ? <Navigate to='/employer/dashboard'/> : employee ? <Portfolio/> : <Navigate to='/'/>}></Route>
    <Route path = 'portfolio/create' element={employer ? <Navigate to='/employer/dashboard'/> : employee ? <CreatePortfolio/> : <Navigate to='/'/>}></Route>
  </Route>
  <Route path = 'employer/profile/:id' element={<EmployerProfile/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default Router