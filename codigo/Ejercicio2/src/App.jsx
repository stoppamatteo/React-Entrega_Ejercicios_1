import CuentaClick from "./components/ContarClick"

function App() {

	return (
		<div>
			<a href="./index.html">Volver al índice...</a>
    		<hr/>
    		<h1>Contador de Clics</h1>
    		<p>Crea una página con un botón que diga "Contar clics" y un texto inicial que muestre "Clics: 0". Cada vez que se haga clic en el botón, el texto debe actualizarse para mostrar el número total de clics realizados.</p>
			<CuentaClick />
		</div>
	)
}

export default App