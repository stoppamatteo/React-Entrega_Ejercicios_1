import PasswordGen from "./components/PasswordGen"

function App() {

	return (
		<div>
			<a href="./index.html">Volver al índice...</a>
    		<hr/>
    		<h1>Generador de Contraseñas Aleatorias</h1>
    		<p>Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que diga “Generar contraseña”.</p>
    		<ul>
    		    <li>Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando letras, números y caracteres especiales.</li>
    		    <li>Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la longitud debe ser mayor o igual a 4.</li>
    		</ul>
			<PasswordGen/>
		</div>
	)
}

export default App