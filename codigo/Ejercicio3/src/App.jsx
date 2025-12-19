import DinamicList from "./components/DinamicList"

function App() {

	return (
		<div>
			<a href="./index.html">Volver al índice...</a>
    		<hr/>
    		<h1>Lista Dinámica</h1>
    		<p>Crea una página con un campo de texto, un botón que diga "Agregar", y una lista vacía debajo.</p>
			<ul>
        		<li>Cuando el usuario escriba un texto y haga clic en "Agregar", el texto debe añadirse como un nuevo elemento de la lista.</li>
        		<li>Añade un botón al lado de cada elemento para eliminarlo de la lista</li>
    		</ul>
			<DinamicList />
		</div>
	)
}

export default App