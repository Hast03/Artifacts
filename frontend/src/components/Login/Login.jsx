import { useState } from "react";
import { login } from "../service/api";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setLoginUser }) => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const goToHome = () => {
    navigate("/", { replace: false });
  };

  return (
    <>
      <div className="loginPage">
        <div className="loginDiv">
          <p className="loginHeading">&lt;/login&gt;</p>
          <form className="loginDetails">
            <label htmlFor="email" className="formDetailHeading">
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              style={{ fontFamily: "Font Awesome 5 Pro" }}
              placeholder="&#xf0e0;  Type Your Email"
              className="formInputFields"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="password" className="formDetailHeading">
              Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="&#xF023;   Type Your Password"
              className="formInputFields"
              onChange={handleChange}
            />
            <p
              className="loginButton"
              onClick={() => {
                login(user, setLoginUser);
                goToHome();
              }}
            >
              LOGIN
            </p>
            <div className="signupDiv">
              <p
                className="signupContent"
                style={{ color: "white", fontSize: "1.5rem" }}
              >
                Create a New Account?
              </p>
              <a
                href="/signup"
                className="signupContent"
                style={{ textDecoration: "none", color: "#83fd90" }}
              >
                &lt;/signup&gt;
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
