import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const RegistrationPage = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const createProfileUrl = "http://localhost:3000/api/user/create";
  const createProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(createProfileUrl, {
        name,
        email,
        password,
      });

      console.log("Succussfully registered..", response.data);
      navigate("/login")
    } catch (error) {
      setError(`${error.response.data.message}`);
    }
  };

  return (
    <div>
      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <form
          action=""
          className="shadow-lg p-5 mb-5 bg-content rounded mt-5"
          onSubmit={createProfile}
          style={{backgroundColor :"#77b1b5" }}
        >
          <h3 className="text-center mb-3">Create Your Account</h3>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <div className="form-text">
              <p className="text-danger">
                {error === "please enter your name" && error}
              </p>
            </div>
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="form-text">
              <p className="text-danger">
                {error === "please enter your email" && error}
                {error === "please enter valid email address" && error}
                {error === "email is already exists" && error}
              </p>
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <div className="d-flex align-items-center border rounded px-2 bg-white">
              <input
                type={show ? "text" : "password"}
                className="form-control no-focus-border"
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
          <div className="form-text">
            <p className="text-danger">
              {error === "please enter your password" && error}
              {error === "password must be atleast 8 characters" && error}
            </p>
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label" for="exampleCheck1">
              <p>
                I agree and accept the <a href="">terms & condition</a>
              </p>
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100 text-center">
            Create Account
          </button>
          <p className="text-center mt-3">
            Already have an account ! <Link to="/login">login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
