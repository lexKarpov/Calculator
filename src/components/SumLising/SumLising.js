import {useContext, useEffect} from 'react'
import CurrentValues from "../../contexts/CurrentValues";

export default function SumLising({everyMonthPay, setAgreement}) {
  const values = useContext(CurrentValues)
  const firstPay = values.firstPay*1
  const term = values.term*1
  const monthPay = firstPay + term * everyMonthPay
  setAgreement(monthPay)
  return(
    <p className="choice__number choice__number_type_sum">{Math.round(monthPay)}</p>
  )
}