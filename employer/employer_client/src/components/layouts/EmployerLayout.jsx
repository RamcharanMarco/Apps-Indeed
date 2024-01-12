import {Outlet} from 'react-router-dom'
import EmployerNavbar from '../navbar/EmployerNavbar'
import Footer from '../footer/Footer';


const EmployerLayout = () => {
    return ( 
        <>
        <EmployerNavbar/>
        <div>
            <Outlet/>
        </div>
        <Footer></Footer>
        </>
     );
}
 
export default EmployerLayout;

