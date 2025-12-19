import { useState, useEffect } from "react"

const MyButton = () => {
	
	const [color, setColor] = useState("rgb(255,255,255)");

	const handleClick = () => {
		let rojo = Math.floor(Math.random() * 256);
    	let verde = Math.floor(Math.random() * 256);
    	let azul = Math.floor(Math.random() * 256);
    	setColor(`rgb(${rojo}, ${verde}, ${azul})`);
	}
	
	useEffect(() => {document.getElementsByTagName("body")[0].setAttribute("style",`background-color: ${color}`)},[color]);

	return <button onClick={handleClick}>Cambiar color</button>
}

export default MyButton;