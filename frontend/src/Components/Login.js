import React from "react";
import Navigationbar from "./Navigationbar";

const Login = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: "#EDE6DB" }}
      >
        <div
          className="jutify-content-center d-flex flex-column"
          style={{
            height: "55%",
            width: "30%",
            padding: "0 35px",
          }}
        >
          <h1 style={{ color: "#417D7A" }} className="mb-4">
            {" "}
            LOGIN{" "}
          </h1>
          <div className="mb-4">
            <input
              style={{
                fontSize: "18",
                backgroundColor: "#EDE6DB",
                borderColor: "#1D5C63",
                borderWidth: "2",
              }}
              className="form-control w-100"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              style={{
                fontSize: "18",
                backgroundColor: "#EDE6DB",
                borderColor: "#1D5C63",
                borderWidth: "2",
              }}
              className="form-control w-100"
              type="password"
              placeholder="Password"
            />
          </div>
          <div
            style={{ backgroundColor: "#1D5C63", color: "#EDE6DB" }}
            className=" fw-bold mt-4 btn"
          >
            ENTER{" "}
          </div>
          <div className="forgot password"> Forgot Password</div>
        </div>
      </div>
    </div>
  );
};
export default Login;
