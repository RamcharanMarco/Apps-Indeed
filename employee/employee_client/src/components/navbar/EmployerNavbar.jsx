import { NavLink, Link } from "react-router-dom";
import { useLogout } from "../../hooks/useEmployerLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import "../../styles/navbar/employerNavbar.css";

function EmployerNavbar() {
  const { logout } = useLogout();
  const { employer } = useAuthContext();
  console.log(employer);

  const handleClick = () => {
    logout();
  };

  return (
    <nav className="employerNavbar">
      <Link to="/employer/dashboard">
        <h1>INDEED EMPLOYER</h1>
      </Link>
      <div id="links" class="links">
        <NavLink to="/employer/dashboard/settings">info</NavLink>
        <NavLink to="/employer/dashboard/vacancies">vacancies</NavLink>

        <button onClick={handleClick}>logout</button>
      </div>
    </nav>
  );
}

export default EmployerNavbar;
