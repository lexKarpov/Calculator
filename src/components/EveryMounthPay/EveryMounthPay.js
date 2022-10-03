import {useContext, useEffect} from "react";
import CurrentValues from "../../contexts/CurrentValues";

export default function EveryMounthPay({setEveryMonthPay}) {
  const values = useContext(CurrentValues)
  const price = values.price*1
  const firstPay = values.firstPay*1
  const term = values.term*1
  // useEffect(()=> setmMonthPay(monthPay), [])
  const monthPay = (price - firstPay) * (0.035 * Math.pow((1 + 0.035), term)) / (Math.pow((1 + 0.035), term) - 1)
  setEveryMonthPay(monthPay)
  return(
      <p className="choice__number choice__number_type_sum">{Math.round(monthPay)}</p>
  )
}