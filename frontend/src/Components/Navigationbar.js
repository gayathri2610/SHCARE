import React from "react";

const Navigationbar = () => {
  return (
    <div>
      {" "}
<<<<<<< HEAD
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
=======
      <nav className="navbar navbar-expand-lg"
      style={{
        backgroundColor:"#1D5C63"
      }}
      >
>>>>>>> 019916f85dd6543627855a7268b989798c0b8f61
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav" 
            style={{
                textColor:"black"
              }}>
              <a className="nav-link active" aria-current="page" href="/h">
                Home
              </a>
              <a className="nav-link" href="/tracker">
                Tracker
              </a>

              <a className="nav-link" href="Aboutus">
                About Us
              </a>
              <a className="nav-link" href="/login">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navigationbar;
