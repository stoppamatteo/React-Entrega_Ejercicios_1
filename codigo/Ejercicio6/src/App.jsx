import TimerComp from "./components/TimerComp"

function App() {

	return (
		<div>
			<a href="./index.html">Volver al índice...</a>
    		<hr/>
    		<h1>Temporizador con Inicio, Pausa y Reinicio</h1>
    		<p>Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: “Iniciar”, “Pausar” y “Reiniciar”.</p>
    		<ul>
    		    <li>Al hacer clic en “Iniciar”, el temporizador debe comenzar a contar los segundos, minutos y horas.</li>
    		    <li>“Pausar” detiene el conteo pero mantiene el tiempo actual.</li>
    		    <li>“Reiniciar” pone el temporizador en 00:00:00.</li>
    		</ul>
			<TimerComp/>
		</div>
	)
}

export default App