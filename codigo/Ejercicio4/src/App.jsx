import DinamicList from "./components/DinamicList"

function App() {

	return (
		<div>
			<a href="./index.html">Volver al índice...</a>
    		<hr/>
    		<h1>Filtro de Búsqueda en Tiempo Real</h1>
    		<p>Crea una página con un campo de texto y una lista predefinida de elementos. </p>
    		<p>● Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para mostrar solo los elementos que contienen el texto escrito.</p>
			<DinamicList />
		</div>
	)
}

export default App