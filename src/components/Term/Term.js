import './Term.css'

import React, {useEffect, useState} from "react";
import Input from "../Input/Input";

export default function Term({data, setValues, disabledInput}) {
  const [value, setValue] = useState(data.min)
  const [valueBall, setValueBall] = useState(value)
  const [widthFillTrack, setWidthFillTrack] = useState(value)
  const [displayMeasurement, setDisplayMeasurement] = useState(data.measurement)

  useEffect(() => {
    if(value-data.min >= 0){
      changeWidthFillTrack()
    }else{
      setWidthFillTrack(0)
    }
  }, [value])
  function changeWidthFillTrack() {
    const widthTracer = (value - data.min) * 100 / data.max
    setWidthFillTrack(369 / 100 * widthTracer)
  }
  function changeValue(e){
    setValue(e.target.value)  //меняет отображение значения
    // setTerm(e.target.value)
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  return(
    <Input
      disabledInput={disabledInput}
      data = {data}
      value = {value}
      changeValue = {changeValue}
      isContribution ={false}
      displayMeasurement = {displayMeasurement}
      valueBall = {value}
      changeBallValue = {changeValue}
      widthFillTrack = {widthFillTrack}
    />
  )
}