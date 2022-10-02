import './FirstPay.css'

import React, {useEffect, useState} from "react";
import Input from "../Input/Input";

export default function FirstPay({data, setCurrPrice, currentPrice}) {
  const [value, setValue] = useState(data.min)
  const [valueBall, setValueBall] = useState(value)
  const [widthFillTrack, setWidthFillTrack] = useState(value)
  const [displayMeasurement, setDisplayMeasurement] = useState(value)

  function changeValue(e){
    console.log('changeValue')
  }
  function changeBallValue(){
    console.log('change value ball')}

  const isContribution = false

  return(
    <Input
      data = {data}
      value = {value}
      changeValue = {changeValue}
      isContribution ={isContribution}
      displayMeasurement = {displayMeasurement}
      valueBall = {valueBall}
      changeBallValue = {changeBallValue}
      widthFillTrack = {widthFillTrack}
    />
  )
}