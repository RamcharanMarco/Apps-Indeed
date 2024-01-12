import { Link } from "react-router-dom";
import "../../styles/employer/employerHome.css";

function EmployerHome() {
  return (
    <div className="employerHome">
      <div className="one">
        <h2 className="headin">VACANCIES</h2>
        <p>list of your vacancies</p>
        <Link className="hiddenLink" to="/employer/dashboard/vacancies">
          VIEW YOUR JOBS
        </Link>
      </div>
      <div className="two">
        <h2 className="headin">POST A JOB</h2>
        <p>post a job and get a vacancy filled</p>
        <Link className="hiddenLink" to="/employer/dashboard/postJob">
          POST A JOB
        </Link>
      </div>
      <div className="three">
        <h2 className="headin">APPLICANTS</h2>
        <p>list of applicants</p>
        <Link className="hiddenLink" to="/employer/dashboard/postJob">
          VIEW
        </Link>
      </div>
    </div>
  );
}

export default EmployerHome;
