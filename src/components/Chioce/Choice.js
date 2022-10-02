import './Choice.css'
import React, {useEffect, useState} from "react";

export default function Choice({data, setCurrPrice, currentPrice}) {
  const [valueBall, setValueBall] = useState(data.min)
  // const [valFirstPay, setValFirstPay] = useState(getPercentage())
  const [widthFillTrack, setWidthFillTrack] = useState(0)
  useEffect(()=>{
    if(data.name === 'price'){
      setCurrPrice(valueBall)
      console.log('valueBall from current price')
      console.log(valueBall)
    }
  }, [])

  function getInputValue(e){
    if(e.target.name === 'price'){
      setCurrPrice(valueBall)
      setValueBall(e.target.value)
    }
    if(e.target.name === 'firstPay'){
      setValueBall(e.target.value)
      console.log('first')
    }
    // console.log(valueBall)
    // seValueBall(e.target.value)
  }

  // function getPercentage() {
  //   return data.name === 'firstPay' ? Math.round(currentPrice / 100 * valueBall) : data.measurement
  // }
  const getPercentage = data.name === 'firstPay' ? Math.round(currentPrice / 100 * valueBall) : data.measurement
  const isContribution = data.name === 'firstPay'

  useEffect(()=>{
    let widthTracer = (valueBall - data.min) * 120 / data.max
    setWidthFillTrack(369 / 100 * widthTracer)

  }, [valueBall])

  useEffect(()=>{
    if(data.name === 'firstPay' && currentPrice){
      console.log(valueBall)
      const value = Math.round(currentPrice / 100 * valueBall)
      setValueBall(value)
      console.log('it`s firsPay')
      console.log('currentPrice')
      console.log(currentPrice)
      console.log('value')
      console.log(value)
  }
}, [currentPrice])
  // function focusInputPay(e){
  //   if(data.name !== 'firstPay'){
  //     seValueBall(e.target.value)
  //   }else{
  //
  //   }
  //
  // }
  return(
    <li className="choice">
      <p className="choice__description">{data.desc}</p>
      <label className="choice__label">
        <input
          name={data.name}
          type="text"
          className="choice__number"
          // value={isContribution ? getPercentage : valueBall}
          value={valueBall}
          onChange={getInputValue}
          // onFocus={focusInputPay}
        />
        <div className={`choice__measurement ${isContribution ? 'choice__measurement_type_contribution': ''}`}>{data.name === 'firstPay'? `${valueBall}%`  : data.measurement }</div>
      </label>
      <input
        type="range"
        className="choice__range"
        value={valueBall}
        min={data.min}
        max={data.max}
        name={data.name}
        onChange={getInputValue}/>
      <div style={{width: `${widthFillTrack}px`}} className="choiсe__trace"></div>
    </li>
  )
}
