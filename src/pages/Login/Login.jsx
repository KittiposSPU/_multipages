import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { verifyUser } from "../../Data/user";
import "./Login.css";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    const user = userRef.current.value.trim();
    const pass = passRef.current.value.trim();
    userRef.current.value = "";
    passRef.current.value = "";
    
    const userInfo = verifyUser(user, pass);
    if (userInfo === null) {
      setErrorMessage("Wrong username or password");
      userRef.current.focus();
    } else {
      setToken(userInfo.token);
      setRole(userInfo.role);
      navigate("./src/pages/Home");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Form.Label htmlFor="username">Username</Form.Label>
      <Form.Control
        type="text"
        id="username"
        placeholder="admin"
        className="Form-control"
        ref={userRef}
      />
      <Form.Label htmlFor="password">Password</Form.Label>
      <Form.Control
        type="password"
        id="password"
        placeholder="admin"
        className="Form-control"
        ref={passRef}
      />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div>
        <button
          className="btn btn-success mt-3"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
