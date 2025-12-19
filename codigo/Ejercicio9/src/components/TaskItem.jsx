import React from "react"
import CompletedCheckBox from "./CompletedCheckBox"

const TaskItem = ({ item, check=false }) => {
	return <li className="item">{item}
	<CompletedCheckBox checkd={check} />
	</li>
}

export default TaskItem
