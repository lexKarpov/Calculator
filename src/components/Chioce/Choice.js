import './Choice.css'
import React, {useEffect, useState} from "react";
import Price from "../Price/Price";
import FirstPay from "../FirstPay/FirstPay";
import Term from "../Term/Term";

export default function Choice({data, setCurrPrice, currentPrice}) {
//   const [valueBall, setValueBall] = useState(data.min)
//   const [displayMeasurement, setDisplayMeasurement] = useState(data.min)
//   const [widthFillTrack, setWidthFillTrack] = useState(0)
//   useEffect(()=>{
//     if(data.name === 'price'){
//       setCurrPrice(valueBall)
//       // console.log('valueBall from current price')
//       // console.log(valueBall)
//     }
//   }, [])
//
//   function getInputValue(e){
//     if(e.target.name === 'price'){
//       setCurrPrice(valueBall)
//       setValueBall(e.target.value)
//     }
//     if(e.target.name === 'firstPay'){
//       setValueBall(Math.round(currentPrice / 100 * valueBall))
//
//       console.log('first')
//     }
//     // console.log(valueBall)
//     // seValueBall(e.target.value)
//   }
//
//   // function getPercentage() {
//   //   return data.name === 'firstPay' ? Math.round(currentPrice / 100 * valueBall) : data.measurement
//   // }
//   const getPercentage = data.name === 'firstPay' ? Math.round(currentPrice / 100 * valueBall) : data.measurement
//   const isContribution = data.name === 'firstPay'
//
//   useEffect(()=>{
//     let widthTracer = (valueBall - data.min) * 110 / data.max
//     setWidthFillTrack(369 / 100 * widthTracer)
//
//   }, [valueBall])
//
//   useEffect(()=>{
//     if(data.name === 'firstPay' && currentPrice){
//       const value = Math.round(currentPrice / valueBall)
//       setDisplayMeasurement(Math.round(valueBall * 100 / currentPrice))
//       setValueBall(value)
//       console.log('it`s firsPay')
//       console.log('currentPrice')
//       console.log(currentPrice)
//       console.log('value')
//       console.log(value)
//       console.log('valueBall')
//       console.log(valueBall)
//   }
// }, [currentPrice])
  let input
  switch (data.name) {
    case 'price': input = <Price data={data} setCurrPrice={setCurrPrice} currentPrice={currentPrice}/>
      break
    case 'firstPay': input = <FirstPay data={data} setCurrPrice={setCurrPrice} currentPrice={currentPrice}/>
      break
    case 'term':  input = <Term data={data} setCurrPrice={setCurrPrice} currentPrice={currentPrice}/>
      break
  }
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
      {input}
    </li>
  )
}
