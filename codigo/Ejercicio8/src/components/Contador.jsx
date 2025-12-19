import { useState,useEffect } from "react";

const Contador = () => {

    const [numeros, setNumeros] = useState([0,0,0]);

    const contaCar = (stringa) => {
        return stringa.replaceAll(" ","").replaceAll(`\n`,"").length;
    }

    const reducirEspacios = (stringa) => {
        let stringAntes = "";
        let stringDespues = stringa;
        do {
            stringAntes = stringDespues;
            stringDespues=stringAntes.replaceAll("  "," ");
        } while (stringDespues.length!==stringAntes.length);
        return stringDespues;
    }

    const contarPalabras = (stringa) => {
        let numPalabras = [];
        let stringaTrim = stringa.trim();
        // Caso 1) - Consideramos como palabras distintas sólo la que están separadas por espacios
        let stringaEspacio = stringaTrim.replaceAll(`\n`,"");
        stringaEspacio = reducirEspacios(stringaEspacio);
        let arrayPalabrasEspacio = stringaEspacio.split(" ");
        if ((arrayPalabrasEspacio.length==1) && (arrayPalabrasEspacio[0]=="")) {
            numPalabras.push(arrayPalabrasEspacio.length - 1);
        } else {
            numPalabras.push(arrayPalabrasEspacio.length);
        }
        // Caso 2) - Consideramos como palabras distintas tanto las que están   separadas por espacios como las que están separadas por saltos de línea
        let stringaSalto = stringaTrim.replaceAll(`\n`," ");
        stringaSalto = reducirEspacios(stringaSalto);
        let arrayPalabrasSalto = stringaSalto.split(" ");
        if ((arrayPalabrasSalto.length==1) && (arrayPalabrasSalto[0]=="")) {
            numPalabras.push(arrayPalabrasSalto.length - 1);
        } else {
            numPalabras.push(arrayPalabrasSalto.length);
        }
        return numPalabras;
    }

    //const updateNumber =(stringa) => {
    //    document.getElementById("caracteres").textContent=contaCar(stringa);
    //    document.getElementById("palabrasEspacio").textContent=contarPalabras(stringa)[0];
    //    document.getElementById("palabrasSalto").textContent=contarPalabras(stringa)[1];
    //}

    const updateNumber =() => {
        document.getElementById("caracteres").textContent=numeros[0];
        document.getElementById("palabrasEspacio").textContent=numeros[1];
        document.getElementById("palabrasSalto").textContent=numeros[2];
    }

    const handleInput = (e) => {
        let stringa=e.target.value;
        setNumeros([contaCar(stringa), ...contarPalabras(stringa)]);
        //document.getElementById("caracteres").textContent=numeros[0];
        //document.getElementById("palabrasEspacio").textContent=numeros[1];
        //document.getElementById("palabrasSalto").textContent=numeros[2];
        //updateNumber(stringa);
    }

    useEffect(()=>{updateNumber()},[numeros]);

    return (<div>
        <div>
            <textarea name="areaDeTexto" id="texto" cols="50" rows="10" placeholder="Empieza a escribir..." onKeyUp={handleInput}></  textarea>
        </div>
        <hr />
        <p>Número de carácteres: <span id="caracteres">0</span></p>
        <p>Número de palabras (separadas por espacios): <span   id="palabrasEspacio">0</span></p>
        <p>Número de palabras (separadas por espacios y saltos de línea): <span id="palabrasSalto">0</span></p>
    </div>)
}
export default Contador