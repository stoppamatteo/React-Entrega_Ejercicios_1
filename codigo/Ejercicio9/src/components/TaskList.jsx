import { useState, useEffect } from "react"
import TaskItem from "./TaskItem"

const TaskList = () => {
	const [elements, setElements] = useState([])
	const [savedList, setSavedList] = useState(false)

	useEffect(() => {
			const handleEnter = (e) => {
				if (e.key !== "Enter") {
					return
				}
				addToList()
			}
	
			window.addEventListener("keydown", handleEnter)
	
			return () => window.removeEventListener("keydown", handleEnter)
		}, [elements])

	const saveInLocalStorage = (elems=elements) => {
		if(elements!=[]){console.log("guardando");localStorage.setItem("listaGuardada",JSON.stringify(elems))}
	}

	const addToList = () => {
		let newTaskName=document.getElementById("newTaskInput").value;
		if (newTaskName!=="") {
			let newTask={name:newTaskName,completed:false};
			const newList = [...elements,newTask];
			setElements(newList);
			document.getElementById("newTaskInput").value="";
			saveInLocalStorage(newList);
		}
	}

	const updateCheckBox = (e) => {
		console.log(e.target);
		if (e.target.className==="checkBox") {
			e.preventDefault();
			console.log(e.target.parentElement.previousSibling.textContent);
			let taskName=e.target.parentElement.previousSibling.textContent;
			let newTasks = elements.map((elem) => {return {name:elem.name,completed:taskName===elem.name?!elem.completed:elem.completed}});
			console.log(newTasks);
			setElements(newTasks);
			console.log(e.target.checked);
			e.target.checked=!e.target.checked;
			console.log(e.target.checked);
		}
	}

	const updateCheckBoxV2 = (e) => {
		if (e.target.className==="checkBox") {
			e.target.checked=!e.target.checked;
			setElements(prev=>{
				let taskName=e.target.parentElement.previousSibling.textContent;
				return prev.map((elem) => {return {name:elem.name,completed:taskName===elem.name?!elem.completed:elem.completed}});
			});
			let taskName=e.target.parentElement.previousSibling.textContent;
			let newTasks=elements.map((elem) => {return {name:elem.name,completed:taskName===elem.name?!elem.completed:elem.completed}});
			saveInLocalStorage(newTasks);
		}
	}

	const limpiar = (e) => {
		let taskCollection=document.querySelectorAll(".taskList li");
		let taskArray=[...taskCollection];
		let mappedArray=taskArray.map((e)=>{return {name:e.firstChild.textContent,completed:e.firstElementChild.firstChild.checked}});
		let filteredArray=mappedArray.filter(e=>!e.completed);
		setElements(filteredArray);
	}

	const restoreSavedList = () => {
		if(localStorage.getItem("listaGuardada")) {
			setElements(JSON.parse(localStorage.getItem("listaGuardada")))
		}
	}

	useEffect(() => {
		let oldElements = JSON.parse(localStorage.getItem("listaGuardada"))||[];
			console.log(oldElements);
			setElements(oldElements);
		}, [])

	return (
		<div className="taskList">
			<input
				type="text"
				placeholder="Nueva tarea"
				id="newTaskInput"
			/>
			<button className="agregar" onClick={addToList}>Agregar Tarea</button>

			<ul onClick={updateCheckBoxV2}>
				{elements.map((item, index) => (
					<TaskItem key={index} item={item.name} check={item.completed}/>
				))}
			</ul>
			<button className="limpiar" onClick={limpiar}>Limpiar</button>
		</div>
	)
}

export default TaskList