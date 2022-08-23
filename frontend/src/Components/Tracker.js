import React from "react";
import Navigationbar from "./Navigationbar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Tracker = (props) => {
  const { score } = props;
  const percentage = 10;
  const hpercentage = 20;
  return (
    <div
      className="vh-100"
      style={{
        backgroundColor: "#EDE6DB",
      }}
    >
      <div>
        <Navigationbar />
      </div>
      <div className="mt-5 d-flex justify-content-around ">
        <div
          className="mt-6"
          style={{
            width: 300,
            height: 300,
          }}
        >
          <h1>Skin-care</h1>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />;
        </div>
        <div
          className="mt-6"
          style={{
            width: 300,
            height: 300,
          }}
        >
          <h1>Hair-care</h1>
          <CircularProgressbar value={hpercentage} text={`${hpercentage}%`} />;
        </div>
      </div>
    </div>
  );
};
export default Tracker;
