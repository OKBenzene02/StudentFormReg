import React from "react";
import nirf from "./nirf.png";
import awards from "./awards.jpg";
import Bar from "./bar.svg";

export function Awards() {
  return (
    <>
      <div className="awards">
        <div>
          <img src={Bar} alt="barchart" height="50px" className="bar" />
          <img src={nirf} alt="nirfstats" width="150px" className="nirf" />
        </div>
        <img src={awards} alt="awards" height="350px" className="awards" />
      </div>
    </>
  );
}
