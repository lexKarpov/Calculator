import './Price.css'
import React, {useEffect, useState} from "react";
import Input from '../Input/Input'

export default function Price({data, setCurrPrice, setValues, disabledInput}) {
  const [value, setValue] = useState(data.min)
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
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
}
  return(
      <Input
       disabledInput={disabledInput}
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
