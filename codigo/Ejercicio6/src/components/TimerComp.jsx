import { useState } from "react";

const TimerComp = () => {

    let displayElement=document.getElementById("displayTime");
    let runCounter;

    const [timeData, setTimeData] = useState([0,0,0]);

    const time2String = (timeData) => {
        return timeData.map(e=>e<10?"0"+e:`${e}`).join(":");
    }

    const iniciar = () => {
        if (runCounter==undefined){
            runCounter=setInterval(()=>{
                let newTimeData=timeData;
                if (newTimeData[2]<59){
                    ++newTimeData[2];
                } else {
                    newTimeData[2] = 0;
                    if (newTimeData[1]<59){
                        ++newTimeData[1];
                    } else {
                        newTimeData[1]=0;
                        ++newTimeData[0];
                    }
                }
                setTimeData(newTimeData);
                let displayElement=document.getElementById("displayTime");
                displayElement.textContent=time2String(timeData);
            },1000);
        }
    }

    const pausar = () => {
        if (runCounter!=undefined){
            clearInterval(runCounter);
            runCounter=undefined;
        }
    }

    const reiniciar = () => {
        pausar();
        setTimeData([0,0,0]);
        let displayElement=document.getElementById("displayTime");
        displayElement.textContent="00:00:00";
        
    }

    return(
        <div>
            <p>Tiempo:</p>
            <h2 id="displayTime">00:00:00</h2>
            <div>
                <button onClick={iniciar}>Iniciar</button>
                <button onClick={pausar}>Pausar</button>
                <button onClick={reiniciar}>Reiniciar</button>
            </div>
        </div>
    )
}

export default TimerComp