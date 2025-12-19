import MyButton from "./components/myButton"

function App() {
	return (
		<div>
			<a href="./index.html">Volver al índice...</a>
    		<hr/>
    		<h1>Cambiador de Color de Fondo</h1>
    		<p>Crea una página web con un botón que diga "Cambiar color". Cada vez que el usuario haga clic en el botón, el color de fondo de la página debe cambiar a un color aleatorio.</p>
			<MyButton />
		</div>
	)
}

export default App