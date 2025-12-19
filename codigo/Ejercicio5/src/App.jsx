import Calculator from "./components/Calculator"

function App() {

	return (
		<div>
			<a href="./index.html">Volver al índice...</a>
    		<hr/>
    		<h1>Calculadora Sencilla</h1>
    		<p>Crea una página con dos campos de entrada de números y cuatro botones: "Sumar", "Restar", "Multiplicar", y "Dividir".</p>
    		<ul>
    		    <li>Al hacer clic en cualquiera de los botones, debe mostrarse el resultado de la operación en un área de texto o debajo de los botones.</li>
    		    <li>Asegúrate de validar los datos para evitar errores (como división por cero o entradas vacías)</li>
    		</ul>
			<Calculator/>
		</div>
	)
}

export default App