import './Price.css'
import React, {useEffect, useState} from "react";
import Input from '../Input/Input'

export default function Price({data, setCurrPrice, currentPrice}) {
  const [value, setValue] = useState(data.min)
  const [valueBall, setValueBall] = useState(0)
  const [widthFillTrack, setWidthFillTrack] = useState(0)
  useEffect(() => {
    if(value-data.min >= 0){
      changeWidthFillTrack()
    }else{
      setWidthFillTrack(0)
    }
  }, [value])
  function changeWidthFillTrack() {
    const widthTracer = (value - data.min) * 120 / data.max
    setWidthFillTrack(369 / 100 * widthTracer)
  }
  function changeValue(e){
    setValue(e.target.value)  //меняет отображение значения
    setCurrPrice(e.target.value) //прокидывает значение в Calculator
}
  return(
      <Input
       data = {data}
       value = {value}
       changeValue = {changeValue}
       isContribution ={false}
       displayMeasurement = {data.measurement}
       valueBall = {value}
       changeBallValue = {changeValue}
       widthFillTrack = {widthFillTrack}
      />
  )
}
