import React from "react";
import leftArrow from "./assets/left-arrow.svg";
import rightArrow from "./assets/right-arrow.svg";

function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img alt="btn icons" src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}

export default BtnSlider