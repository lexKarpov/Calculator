import {useContext} from "react";
import CurrentValues from "../../contexts/CurrentValues";
import './Submit.css'

export default function Submit() {
  const values = useContext(CurrentValues)
  return(
    <button type="submit" className="choice__submit">
      Оставить заявку
    </button>
  )
}