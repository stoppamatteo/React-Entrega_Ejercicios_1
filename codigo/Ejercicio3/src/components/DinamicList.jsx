import { useState, useEffect } from "react"
import DinamicItem from "./DinamicItem"

const DinamicList = () => {
	const [elements, setElements] = useState([])

	const [newItem, setNewItem] = useState("")

	const handleInputChange = (e) => {
		setNewItem(e.target.value)
	}

	useEffect(() => {
		const handleEnter = (e) => {
			if (e.key !== "Enter") {
				return
			}
			handleAddToList()
		}

		window.addEventListener("keydown", handleEnter)

		return () => window.removeEventListener("keydown", handleEnter)
	}, [elements, newItem])

	//useEffect(() => setElements(elements), [elements])
	const removeItem = (e) => {
		if(e.target.classList.value==="closeButton"){
			let textToDelete = e.target.parentElement.firstChild.textContent;
			const newElements=elements.filter(it=>it.text!==textToDelete);
			setElements(newElements);
		}
	}


	let closeButtons = document.getElementsByClassName("closeButton");
	for (let butt of closeButtons) {
		butt.addEventListener("click",removeItem);
	}
	

	const handleAddToList = () => {
		const newListItem = {
			text: newItem,
		}

		const newElements = [...elements, newListItem]

		setElements(newElements)

		setNewItem("")
	}

	return (
		<div>
			<input
				type="text"
				placeholder="Nuevo elemento"
				value={newItem}
				onChange={handleInputChange}
			/>

			<button
				onClick={handleAddToList}
			>
				Agregar
			</button>

			<ul>
				{elements.map((item, index) => (
					<DinamicItem key={index} item={item} />
				))}
			</ul>
		</div>
	)
}

export default DinamicList