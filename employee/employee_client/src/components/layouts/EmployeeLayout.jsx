import {Outlet} from 'react-router-dom'
import EmployeeNavbar from '../navbar/EmployeeNavbar'
import Footer from '../footer/Footer';


const EmployeeLayout = () => {
    return ( 
        <>
        <EmployeeNavbar/>
        <div>
            <Outlet/>
        </div>
        <Footer></Footer>
        </>
     );
}
 
export default EmployeeLayout;