import './Calculator.css'
import Choice from "../Choice/Choice";
import {useState} from "react";
import CurrentValues from "../../contexts/CurrentValues";

export default function Calculator(){
  const [currentPrice, setCurrentPrice] = useState(1000000)
  const descriptionList = [
    {
      desc: 'Стоимость автомобиля',
      min: '1000000',
      max: '6000000',
      name: 'price',
      measurement: '₽',
      isContribution: false,
      isWithDecs: true,
    }, {
      desc: 'Первоначальный взнос',
      min: '10',
      max: '60',
      name: 'firstPay',
      measurement: '',
      isContribution: true,
      isWithDecs: true,
    },
    {
      desc: 'Срок лизинга',
      min: '1',
      max: '60',
      name: 'term',
      measurement: 'мес.',
      isContribution: false,
      isWithDecs: true,
    },
    {
      name: 'sumLising',
      desc: 'Сумма договора лизинга',
      isWithDecs: true,
    },
    {
      name: 'everyMounthPay',
      desc: 'Ежемесячный платеж от',
      isWithDecs: true,
    },
    {
      name: 'submit',
      desc: 'Оставить заявку',
      isWithDecs: false,
    },
  ]
  const [everyMonthPay, setEveryMonthPay] = useState(931500)
  const [agreement, setAgreement] = useState(1031500)
  const [values, setValues] = useState({
    price: 1000000,
    firstPay: 100000,
    term: 1
  })
  const [disabled, setDisabled] = useState('')

  function submitForm(e) {
    e.preventDefault()
    setDisabled(true)
    if(disabled){
      return null
    }

    fetch('https://eoj3r7f3r4ef6v4.m.pipedream.net', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        price: values.price,
        firstPay: values.firstPay,
        term: values.term,
        everyMonthPay,
        agreement
      })
    })
      .then(res => {
        setDisabled(false)
        return res.ok ? res.json() : Promise.reject(res)
      })
  }
  return(
    <CurrentValues.Provider value = {values}>
      <form className="calculator" onSubmit={submitForm}>
          <ul className="calculator__list">
            {descriptionList.map((el, index) => <Choice
              data={el}
              setValues={setValues}
              setAgreement={setAgreement}
              everyMonthPay={everyMonthPay}
              setEveryMonthPay={setEveryMonthPay}
              currentPrice={currentPrice}
              setCurrPrice={setCurrentPrice}
              key={index}
              disabledInput={disabled}
            />)}
          </ul>
      </form>
    </CurrentValues.Provider>
  )
}