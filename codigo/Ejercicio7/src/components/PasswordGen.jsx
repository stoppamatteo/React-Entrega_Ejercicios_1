import { useState } from "react"

const PasswordGen = ()=>{

    const [long, setLong] = useState(0);

    const handleInput = (e) => {
        console.log("Hey")
        if (parseInt(e.target.value)>=4&&parseInt(e.target.value)) {
            setLong(parseInt(e.target.value));
            document.getElementById("generador").removeAttribute("disabled")
        } else if (e.target.value!=="") {
            alert("La longitud debe ser un valor númerico igual o mayor que 4")
            document.getElementById("generador").setAttribute("disabled",true)
        }
    }

    let minusculas = "abcdefghijklmnopqrstuvwxyz";
    let mayusculas = minusculas.toUpperCase();
    let numeros = "1234567890";
    let caracteresEspeciales="+-*/=!?%$&.,;:¨{}[]()";

    const eleentoAleatorio = (array) => {
        return array[Math.floor(Math.random()*array.length)];
    }

    const meszclador = (array) => {
        let arrayMezclado = [];
        let longitudArray = array.length;
        let indiceAzar=0;
        for (let i = 0; i < longitudArray; i++) {
            do {
                indiceAzar = Math.floor(Math.random() * longitudArray);
            } while (arrayMezclado[indiceAzar]);
            arrayMezclado[indiceAzar] = array[i];
        }
        return arrayMezclado;
    }

    const generaPassword = () => {
        let password = "";
        password += eleentoAleatorio([...minusculas]);
        password += eleentoAleatorio([...mayusculas]);
        password += eleentoAleatorio([...numeros]);
        password += eleentoAleatorio([...caracteresEspeciales]);
        if (long>4) {
            for (let i = 5; i<=long; i++){
                password += eleentoAleatorio([...minusculas, ...mayusculas, ...numeros, ...caracteresEspeciales]);
            }
        } else if (long==4){
            let passwordFinal = meszclador([...password]);
            password = passwordFinal.slice(0,long);
        } else {
            alert("Lacontraseña debe tener mínimo 4 carácteres!")
            return false;
        }
        password = meszclador([...password]);
        password = password.toString().replaceAll(",","");
        let displayPassword = document.getElementById("resultado");
        displayPassword.textContent=password;
        return password;
    }

    return (<div>
        <div>
            <label htmlFor="longitud">Longitud de la contraseña</label>
            <input type="text" id="longitud" onBlur={handleInput}/>
        </div>
        <div>
            <button id="generador" onClick={generaPassword}>Generar contraseña</button>
        </div>
        <hr />
        <p>Contraseña generada:</p>
        <p id="resultado"></p>
    </div>)
}

export default PasswordGen