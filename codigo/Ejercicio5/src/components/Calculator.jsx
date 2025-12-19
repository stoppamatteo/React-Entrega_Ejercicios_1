import { useState, useEffect } from "react"
import CalcButton from "./CalcButton"

const Calculator = () => {

    const[number1, setNumber1] = useState(null);
    const[number2, setNumber2] = useState(null);

    const setNumber = (e) => {
        let value=e.target.value;
        e.target.id==="numero1"?setNumber1(value):setNumber2(value);
    }

    return (
    <div>
        <div>
            <label htmlFor="numero1">Primer Número: </label>
            <input type="number" id="numero1" onChange={setNumber}/>
        </div>
        <div>
            <label htmlFor="numero2">Segundo Número: </label>
            <input type="number" id="numero2" onChange={setNumber}/>
        </div>
        <div>
            <CalcButton operation="sumar" number1={number1} number2={number2}/>
            <CalcButton operation="restar" number1={number1} number2={number2}/>
            <CalcButton operation="multiplicar" number1={number1} number2={number2}/>
            <CalcButton operation="dividir" number1={number1} number2={number2}/>
        </div>
        <label htmlFor="resultado">Resultado: </label>
        <input type="number" id="resultado" placeholder="" disabled></input>
    </div>)
}

export default Calculator