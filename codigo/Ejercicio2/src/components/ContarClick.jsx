import { useState } from "react"

const CuentaClick = () => {

	const [clicks, setClicks] = useState(0);

	const handleClick = () => {
		setClicks(clicks + 1);
	}

	return (
		<div style={{textAlign: "center"}}>
			<button onClick={handleClick}>Contar clics</button>
			<p>Clics: {clicks}</p>
		</div>
	)
}

export default CuentaClick;