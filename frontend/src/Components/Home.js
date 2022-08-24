import React from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";

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
        <h1 className="mt-4 text-center"
        style={{
          color:"#1A3C40"
        }}
        >Welcome to Skin & Hair Care Assitant!🤗
        </h1>
       <div class="mt-5 container-xxl"
       style={{
        backgroundColor:"#417D7A",
        height: "100%",
        width:"100%",
        maxHeight:"flex",
        maxWidth:"flex",
        alignContent:"center",
        color:"#1A3C40",
       }}
       >
        <img src={img1} class="mt-4 rounded float-start" alt="Not avilable"
          style={{
            width:"300px",
            height:"250px",
            maxBlockSize:"flex"
          }}
        ></img>
        <img src={img1} class="mt-4 rounded float-end" alt="Not avilable"
          style={{
            width:"300px",
            height:"250px",
            
          }}
        ></img>
        <div className="mt-3 float-start" 
        style={{
          color:"black",
          textAlign:"justify"
        }}
        >
           Here is the definition of Self care - The practice of taking an active
          role in protecting one's own well-being and happiness, in particular
          during periods of stress. <br/> Having troubling keeping up the
          track of your selfcare routine? Here is your solution for it!
          <br/>Skin-Hair-Care tracker helps you to maintain a better trak of
          the itams you used, using and should use. Skin-Hair-Care tracker helps
          you to maintain a better trak of the items you used, using and should
          use to prevent or cure an issue that might occur due to many possible
          reasons. <br/> In growing world with many issues like pollution,
          stress, dead skin cells, dehydration, hormonal imbalances and many
          more.
        </div>
       </div>   
       <div class="container-xxl"
       style={{
        backgroundColor:"#EDE6DB",
        height: "500px",
        width:"5000px",
        color:"#1A3C40"
       }}
       >
        <img src={img2} class="mt-4 rounded float-start" alt="Not avilable"
        style={{
          width:"300px",
          height:"250px",
          
        }}
      ></img>
      <img src={img2} class="mt-4 rounded float-end" alt="Not avilable"
        style={{
          width:"300px",
          height:"250px",
          
        }}
      ></img>
        <div className="mt-3 float-start" 
        style={{
          color:"black",
          textAlign:"justify"
        }}
        >
          Here is the definition of Self care - The practice of taking an active
          role in protecting one's own well-being and happiness, in particular
          during periods of stress. <br/> Having troubling keeping up the
          track of your selfcare routine? Here is your solution for it!
          <br/>Skin-Hair-Care tracker helps you to maintain a better trak of
          the itams you used, using and should use. Skin-Hair-Care tracker helps
          you to maintain a better trak of the items you used, using and should
          use to prevent or cure an issue that might occur due to many possible
          reasons. <br/> In growing world with many issues like pollution,
          stress, dead skin cells, dehydration, hormonal imbalances and many
          more.
        </div>
          
       </div>
       <div class="container-xxl"
       style={{
        // position:"absolute",
        backgroundColor:"#417D7A",
        height: "50%",
        width:"flex",
        color:"#1A3C40"
       }}
       >
       </div>
       
      </div>
    </div>
  );
};
export default Home;
