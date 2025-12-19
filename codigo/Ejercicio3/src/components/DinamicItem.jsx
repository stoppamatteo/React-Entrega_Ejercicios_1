import React from "react"
import CloseButton from "./CloseButton"

const DinamicItem = ({ item }) => {
	return <li className="item">{item.text}
		<CloseButton />
	</li>
}

export default DinamicItem
