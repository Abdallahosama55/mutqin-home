import React from "react";
import Coding from "../assets/Coding Animation 1 (1).png";
import orbits from "../assets/orbits.png";
import robot from "../assets/ropot.png";
import FirstStep from "./FirstStep";

const Steps = () => {
  return (
    <div>
      <FirstStep image={Coding} />
      <FirstStep
        image={orbits}
        imagepostion="right"
      />
      <FirstStep image={robot} />
    </div>
  );
};

export default Steps;
