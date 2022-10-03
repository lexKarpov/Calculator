import './Input.css'
import React from "react";

export default function Input({data, value, changeValue, isContribution, displayMeasurement, valueBall, changeBallValue, widthFillTrack, changeFocuse}) {
  return(
    <>
      <label className="choice__label">
        <input
          name={data.name}
          type="text"
          className="choice__number"
          // value={isContribution ? getPercentage : valueBall}
          value={value}
          onChange={changeValue}
          onBlur={changeFocuse}
        />
        <div className={`choice__measurement ${isContribution ? 'choice__measurement_type_contribution': ''}`}>{displayMeasurement}</div>
      </label>
      <input
        type="range"
        className="choice__range"
        value={valueBall}
        min={data.min}
        max={data.max}
        name={data.name}
        onChange={changeBallValue}/>
      <div style={{width: `${widthFillTrack}px`}} className="choiсe__trace"></div>
    </>
  )
}