import { useState } from "react";
import { register } from "../service/api";
import "./Signup.css";

const Signup = () => {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(null);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  function getData(val) {
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <>
      {print ? <h1>{data}</h1> : null}

      <div className="loginPage">
        <div className="loginDiv">
          <p className="loginHeading">&lt;/signup&gt;</p>
          <form className="signDetails" method="post">
            <label htmlFor="name" className="formDetailHeading">
              Name
            </label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="&#xF007;   Type Your Name"
              className="formInputFields"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="email" className="formDetailHeading">
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="&#xF0E0;   Type Your Email"
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
              placeholder="&#xF023;   Type Your Password"
              className="formInputFields"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="confirmPassword" className="formDetailHeading">
              Confirm Password
            </label>
            <br />
            <input
              type="password"
              name="confirmPassword"
              placeholder="&#xF023;   Confirm Your Password"
              className="formInputFields"
              onChange={handleChange}
            />
            <p
              className="loginButton"
              onClick={() => {
                register(user);
                setPrint(true);
              }}
            >
              REGISTER
            </p>
            <div className="signupDiv">
              <p
                className="signupContent"
                style={{ color: "white", fontSize: "1.2rem" }}
              >
                Already Have An Account?
              </p>
              <a
                href="/login"
                className="signupContent"
                style={{ textDecoration: "none", color: "#83fd90" }}
              >
                &lt;/login&gt;
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
