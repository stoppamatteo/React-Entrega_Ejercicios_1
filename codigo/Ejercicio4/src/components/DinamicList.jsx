import { useState, useEffect } from "react"
import DinamicItem from "./DinamicItem"

const predefinedList = ["Gato","Perro","Pez","Hierba gatuna","Perrito caliente","Lince","Himalaya","Toledo","Cicle","Manzana","Manzanilla","Mantel","Aguacate","Agua","Cerveza","Levadura","Leche","Pasta","Bicicleta","Coche"];

const DinamicList = () => {
	const [elements, setElements] = useState(predefinedList)

	const handleInputChange = (e) => {
		let filterText=e.target.value;
		const newList = predefinedList.filter(e=>e.toLowerCase().includes(filterText.toLowerCase()));
		setElements(newList);
	}

	return (
		<div>
			<label htmlFor="">Búsqueda: </label>
			<input
				type="text"
				placeholder="Búsca aquí"
				onChange={handleInputChange}
			/>

			<ul>
				{elements.map((item, index) => (
					<DinamicItem key={index} item={item} />
				))}
			</ul>
		</div>
	)
}

export default DinamicList