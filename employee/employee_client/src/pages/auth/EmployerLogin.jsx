import { useState } from "react";
import { useEmployerLogin } from "../../hooks/useEmployerLogin";
import "../../styles/auth/employerLogin.css";

function EmployerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isLoading } = useEmployerLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="employerloginpage">
      <h1>Employer Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={isLoading}>Login</button>
        {error ? <div className="error">{error}</div> : null}
      </form>
    </div>
  );
}

export default EmployerLogin;
