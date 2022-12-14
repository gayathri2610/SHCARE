import React from "react";
import Navigationbar from "./Navigationbar";
import img1 from "../images/skinc.jpg";
import img2 from "../images/hairc.jpg";
// console.skinc(skinc);
const Aboutus = () => {
  return (
    <div className="">
      <div
        className="vh-100"
        style={{
          backgroundColor: "#EDE6DB",
        }}
      >
        <div>
          <Navigationbar />
          <h1 className="mt-5">
            <small class="text-muted">SKIN AND HAIR CARE TRACKER</small>
          </h1>
          Here is the definition of Self care - The practice of taking an active
          role in protecting one's own well-being and happiness, in particular
          during periods of stress. <br></br> Having troubling keeping up the
          track of your selfcare routine? Here is your solution for it!
          <br></br>Skin-Hair-Care tracker helps you to maintain a better track
          of the partuculars you used, using and should use. Skin-Hair-Care
          tracker helps you to maintain a better trak of the items you used,
          using and should use to prevent or cure an issue that might occur due
          to many possible reasons. <br></br> In growing world with many issues
          like pollution, stress, dead skin cells, dehydration, hormonal
          imbalances and many more.
          <div className="mt-5 d-flex justify-content-around">
            <div className="mt-6">
              <div className="text-center">
                <h1>Skin-care</h1>
                <div className="mt-5">
                  <img
                    src={img1}
                    class="rounded"
                    alt="..."
                    style={{
                      height: "350px",
                      width: "350px",
                    }}
                  ></img>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="text-center">
                <h1>Hair-care</h1>
                <div className="mt-5">
                  <img
                    src={img2}
                    class="rounded"
                    alt="..."
                    style={{
                      height: "350px",
                      width: "350px",
                    }}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
