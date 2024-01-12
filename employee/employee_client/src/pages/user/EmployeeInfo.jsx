import { useNavigate, Link } from "react-router-dom";
import "../../styles/user/employeeInfo.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";
import { BACKEND } from "../../api/env";

function EmployeeInfo() {
  const { cv, employee, dispatch } = useAuthContext();
  const navigate = useNavigate();

  const [portfolio, setPortfolio] = useState(false);

  const deleteRes = async () => {
    const response = await fetch(
      `${BACKEND}/api/employee/deleteCvDocument`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${employee.token}`,
        },
      }
    );
    const json = await response.json();
    console.log(json);

    if (response.ok) {
      navigate("/employee/dashboard");
      localStorage.removeItem("cv");
      dispatch({ type: "SETCV_STATUS", payload: false });
    }
  };

  const deleteAcc = async () => {
    const response = await fetch(
      `${BACKEND}/api/employee/delete`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${employee.token}`,
        },
      }
    );
    const json = await response.json();
    console.log(json);

    if (response.ok) {
      navigate("/");
      localStorage.removeItem("cv");
      localStorage.removeItem("employee");
      dispatch({ type: "SETCV_STATUS", payload: false });
      dispatch({ type: "EMPLOYEE_LOGOUT" });
    }
  };

  return (
    <div className="employeeInfo">
      <div>
        <h1>hello defjljf@gmail.com</h1>
        <p>RESUME: {cv ? "uploaded" : "not uploded"}</p>
        <p>portoflio: {portfolio ? "created" : "not created"}</p>
        {cv ? (
          ""
        ) : (
          <Link to="/employee/dashboard/addResume">UPLOAD YOUR RESUME</Link>
        )}

        <Link to="/employee/dashboard/portfolio">portfolio</Link>
        <Link to="/employee/dashboard/portfolio/create">create portfolio</Link>
      </div>

      <div>
        {cv ? (
          <button onClick={deleteRes} to="/employee/dashboard/info/edit">
            DELETE RESUME
          </button>
        ) : (
          ""
        )}
        <button onClick={deleteAcc}>DELETE ACCOUNT</button>
      </div>
    </div>
  );
}

export default EmployeeInfo;
