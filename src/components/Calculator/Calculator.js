import './Calculator.css'
import Choice from "../Chioce/Choice";
import {useState} from "react";

export default function Calculator(){
  const [currentPrice, setCurrentPrice] = useState(1000000)
  const descriptionList = [
    {
      desc: 'Стоимость автомобиля',
      min: '1000000',
      max: '6000000',
      name: 'price',
      measurement: '₽',
      isContribution: false
    }, {
      desc: 'Первоначальный взнос',
      min: '10',
      max: '60',
      name: 'firstPay',
      measurement: '',
      isContribution: true
    },
    {
      desc: 'Срок лизинга',
      min: '1',
      max: '60',
      name: 'term',
      measurement: 'мес.',
      isContribution: false
    },]
  return(
    <div className="calculator">
      <ul className="calculator__list">
        {descriptionList.map((el, index) => <Choice data={el} currentPrice={currentPrice} setCurrPrice={setCurrentPrice} key={index}/>)}
      </ul>
    </div>
  )
}