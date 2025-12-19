import React from "react"

const CalcButton = ({operation, number1, number2}) => {

    let resultField = document.getElementById("resultado");

    let operationText=operation[0].toUpperCase();
    for (let i=1; i<operation.length; i++){
        operationText += operation[i];
    }

    function comprubaEntrada(numero,pos) {
        if (parseFloat(numero)||parseFloat(numero)==0) {
            // si la entrada es un número
            return parseFloat(numero);
        } else {
            // Si el elemento no es un número lanza un error
            alert(`El valor del ${(pos===1)?"primer":"segundo"} número no es admitido`);
        }
    }

    function compruebaCero(numero){
        if (numero) {
            // Si el número es distinto de cero
            return false;
        } else {
            // Si es igual a cero
            alert("El divisor no puede ser igual a 0");
            return true;
        }
    }

    function calculadora(){
        let numero1 = comprubaEntrada(number1,1);
        let numero2 = comprubaEntrada(number2,2);
        if (numero1!=undefined&&numero2!=undefined) {
            switch (operation) {
                case "sumar":
                    resultField.value=numero1 + numero2;
                    break;
                case "restar":
                    resultField.value=numero1 - numero2;
                    break;
                case "multiplicar":
                    resultField.value=numero1 * numero2;
                    break;
                case "dividir":
                    if (!compruebaCero(numero2)) {
                        resultField.value=numero1 / numero2;
                    }
                    break;
            }
        }
    }

    return <button onClick={calculadora} >{operationText}</button>
}

export default CalcButton