import Contador from "./components/Contador"

function App() {

	return (
		<div>
			<a href="./index.html">Volver al índice...</a>
    		<hr/>
    		<h1>Contador de Palabras y Caracteres</h1>
    		<p>Crea una página con un campo de texto donde el usuario pueda escribir un párrafo.</p>
    		<ul>
    	    	<li>Muestra en tiempo real el número de caracteres y palabras 	ingresados debajo del campo.</li>
    	    	<li>Palabras deben ser separadas por espacios, y los caracteres no 	deben incluir espacios ni saltos de línea</li>
    		</ul>
			<Contador/>
		</div>
	)
}

export default App