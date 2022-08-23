import React from "react";
import Navigationbar from "./Navigationbar";
const Home = () => {
  return (
    <div>
      <div
        className="vh-100"
        style={{
          backgroundColor: "#EDE6DB",
        }}
      >
        <Navigationbar />
        Welcome to skin and hair care
      </div>
    </div>
  );
};
export default Home;
