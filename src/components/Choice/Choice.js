import './Choice.css'
import React, {useEffect, useState} from "react";
import Price from "../Price/Price";
import FirstPay from "../FirstPay/FirstPay";
import Term from "../Term/Term";
import SumLising from "../SumLising/SumLising";
import EveryMounthPay from "../EveryMounthPay/EveryMounthPay";
import Submit from "../Submit/Submit";

export default function Choice({data, setCurrPrice, currentPrice, setEveryMonthPay, setValues, everyMonthPay, setAgreement, disabledInput}) {


  let element
  switch (data.name) {
    case 'price': element = <Price data={data} setCurrPrice={setCurrPrice} currentPrice={currentPrice} disabledInput={disabledInput} setValues={setValues}/>
      break
    case 'firstPay': element = <FirstPay data={data} setCurrPrice={setCurrPrice} currentPrice={currentPrice} disabledInput={disabledInput} setValues={setValues}/>
      break
    case 'term':  element = <Term data={data} setCurrPrice={setCurrPrice} currentPrice={currentPrice} disabledInput={disabledInput} setValues={setValues}/>
      break
    case 'sumLising':  element = <SumLising everyMonthPay={everyMonthPay} setAgreement={setAgreement}/>
      break
    case 'everyMounthPay':  element = <EveryMounthPay setEveryMonthPay={setEveryMonthPay}/>
      break
    default:
      element = <Submit/>
  }
  return(
    <li className="choice">
      {data.isWithDecs && <p className="choice__description">{data.desc}</p>}
      {element}
    </li>
  )
}
