import { useEmployerSignup } from "../../hooks/useEmployerSignup";
import { useState } from "react";
import "../../styles/auth/employerSignup.css";

function EmployerSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [role, setRole] = useState("");
  const [err, setErr] = useState(false);

  const { signup, isLoading, error } = useEmployerSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !email ||
      !password ||
      !companyName ||
      !fullName ||
      !contactNumber ||
      !role
    ) {
      setErr(true);
    } else {
      await signup(email, password, companyName, fullName, contactNumber, role);
    }
  };

  return (
    <div className="employerSignupPage">
      <h1>WELCOME FUTURE EMPLOYER</h1>
      <p>Signup and start posting job openings</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="companyname"
        />
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="fullname"
        />
        <input
          type="text"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          placeholder="contactnumber"
        />
        <p>role</p>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="employer">employer</option>
            <option value="agency">agency</option>
          </select>
        <button disabled={isLoading}>SUBMIT</button>
        {error && <div>{error}</div>}
        {err && (
          <div className="input-group msg">please fill in all fields</div>
        )}
      </form>
    </div>
  );
}

export default EmployerSignup;
