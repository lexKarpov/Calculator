import './Price.css'

import React, {useEffect, useState} from "react";

export default function Prise({data, setCurrPrice, currentPrice}) {

  // return(
  //   <li className="choice">
  //     <p className="choice__description">{data.desc}</p>
  //     <label className="choice__label">
  //       <input
  //         name={data.name}
  //         type="text"
  //         className="choice__number"
  //         value={isContribution ? getPercentage() : valueBall}
  //         onChange={getInputValue}
  //         onFocus={focusInputPay}/>
  //       <div className={`choice__measurement ${isContribution ? 'choice__measurement_type_contribution': ''}`}>{data.name === 'firstPay'? `${valueBall}%`  : data.measurement }</div>
  //     </label>
  //     <input
  //       type="range"
  //       className="choice__range"
  //       value={valueBall}
  //       min={data.min}
  //       max={data.max}
  //       name={data.name}
  //       onChange={getInputValue}/>
  //     <div style={{width: `${widthFillTrack}px`}} className="choiсe__trace"></div>
  //   </li>
  // )
}
