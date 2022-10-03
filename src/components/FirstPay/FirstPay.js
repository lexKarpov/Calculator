import './FirstPay.css'

import React, {useEffect, useState} from "react";
import Input from "../Input/Input";

export default function FirstPay({ data, setCurrPrice, currentPrice }) {
  const [value, setValue] = useState(data.min)
  const [widthFillTrack, setWidthFillTrack] = useState(value)
  const [displayMeasurement, setDisplayMeasurement] = useState(data.min)
  // const [isInFocuse, setIsInFocuse] = useState(false)
  const [resultDisplay, setResultDisplay] = useState(100000)

  useEffect(()=>{
    if(currentPrice){
      resolveProcentSummury()
  }
}, [currentPrice])
  useEffect(() => {
    if(value-data.min >= 0){
      changeWidthFillTrack()
    }else{
      setWidthFillTrack(0)
    }
  }, [value])
  function resolveProcentSummury(){
    const isPrice = currentPrice || 100000
    // console.log(isPrice)
    // console.log('displayMeasurement')
    // console.log(displayMeasurement)
    const sum = displayMeasurement * isPrice / 100
    setResultDisplay(Math.round(sum))
  }
  function changeWidthFillTrack() {
    const widthTracer = (value - data.min) * 120 / data.max
    setWidthFillTrack(369 / 100 * widthTracer)
  }
  function changeValue(e){
    setValue(e.target.value)  //меняет отображение значения
    setDisplayMeasurement(e.target.value) // отображает проценты в углу
    resolveProcentSummury()
  }
  function changeFocuse(){
    setDisplayMeasurement(resultDisplay)
    resolveProcentSummuryFromInput(resultDisplay)
  }
  function resolveProcentSummuryFromInput(resultDisplay){//при расфокусировке считает сумму
    console.log(currentPrice)
    const sum = currentPrice * resultDisplay / 100
    setResultDisplay(Math.round(sum))
  }
  function changeDisplay(e){
    setResultDisplay(e.target.value)
  }

  return(
    <Input
      data = {data}
      value = {resultDisplay}
      changeValue = {changeDisplay}
      isContribution = {true}
      displayMeasurement = {`${displayMeasurement}%`}
      valueBall = {value}
      changeBallValue = {changeValue}
      changeFocuse = {changeFocuse}
      widthFillTrack = {widthFillTrack}
    />
  )
}