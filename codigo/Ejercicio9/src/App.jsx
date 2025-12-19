import TaskList from "./components/TaskList"

function App() {

	return (
		<div>
			<a href="./index.html">Volver al índice...</a>
    		<hr/>
    		<h1>Lista de Tareas con LocalStorage</h1>
    		<p>Crea una aplicación de lista de tareas</p>
			<ul>
    			<li>Cada tarea debe incluir un texto y un checkbox para marcarla como completada.</li>
    			<li>Las tareas se deben guardar en localStorage para que persistan incluso si la página se recarga.</li>
    			<li>Debe incluir un botón para limpiar todas las tareas completadas y actualizar el localStorage</li>
			</ul>
    		<hr />
			<TaskList/>
		</div>
	)
}

export default App