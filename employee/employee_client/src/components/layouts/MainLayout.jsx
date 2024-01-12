import {Outlet} from 'react-router-dom'
import MainNavbar from '../navbar/MainNavbar';
import Footer from '../footer/Footer';
import { useState } from 'react';
import '../../styles/layouts/mainLayout.css'


const MainLayout = () => {

    const [show, setShow] = useState(false)

    const toggle = () => {
        setShow(!show)
    }

    return ( 
        <div style={{width: '100%'}} className='mainLayout'>
            <div id='mainDropDownMenu' className="mainDropDownMenu">
                <h1 style={show ? {height: '88vh'} : {height: '0vh'}}>i am the dropodn menu</h1>
            </div>
        <MainNavbar toggle={toggle}/>
            <Outlet/>
        <Footer/>
        </div>
     );
}
 
export default MainLayout;