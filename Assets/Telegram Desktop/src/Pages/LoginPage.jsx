import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginUrl = "http://localhost:3000/api/user/login";

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(loginUrl, { email, password });
      console.log(response.data);
      navigate("/price");
    } catch (error) {
      setError(error.response.data.message);
      // console.log(error.response.data.message);
    }
  };
  return (
    <>
      <div className="container min-vh-100 d-flex justify-content-center align-items-center ">
        <form
          className="shadow-lg p-5 mb-5 bg-content rounded mt-5"
          onSubmit={handleLogin}
          style={{backgroundColor :"#77b1b5" }}
        >
          <h3 className="text-center mb-3">Log In</h3>
          <div className="mb-3">
            <label  className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control no-focus-border"
              aria-describedby="emailHelp"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label  className="form-label">
              Password
            </label>
            <div className="d-flex align-items-center border rounded px-2 bg-white">
              <input
                type={show ? "text" : "password"}
                className="form-control no-focus-border"
                required
                autoComplete="current-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                style={{
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                  borderColor: "transparent",
                }}
              />
              <i
                onClick={() => {
                  setShow(!show);
                }}
                className={show ? " bi-eye-fill" : "bi-eye-slash-fill"}
              ></i>
            </div>
          </div>

          <div  className="form-text">
            <p className="text-danger"> {error}</p>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </div>
          <p className=" text-center mt-3">
            Don't have an account ? <Link to="/create">create now</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
