import React from "react";
// import getFlower from "../utils/getFlower.js";

const FlowerComp = ({ gameOver }) => {
  return (
      <div className="bloom">
        <div className={gameOver ? "flower" : ""} />
      </div>
    );
  }


export default FlowerComp;
