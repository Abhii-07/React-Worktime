import React,{useState} from 'react'
import styles from "./Stopwatch.module.css"




const Stopwatch = () => {
    // Conver timer
    function msToTime(duration) {
        var seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return hours + ":" + minutes + ":" + seconds;
      }
      

    const [timerId, setTimerId] = useState()
    const [watch, setWatch] = useState(0)

    const Start = () => {
        if(!timerId){
            let id = setInterval(() => {
                setWatch(((prev) => prev+1000))
            },100);
            setTimerId(id);
        }
    };
    const Stop = () => { 
        clearInterval(timerId);
        setTimerId(null)
    }
    const Reset = () => {
        clearInterval(timerId);
        setWatch(0);
    }
  return (
    <div className={styles.display}>
        <h1>Stopwatch </h1>
        <h2>{msToTime(watch)}</h2>
        <div>
        <button onClick={Start}>Start</button> 
        <button onClick={Stop}>Stop</button>
        <button onClick={Reset}>Reset</button>
        </div>
        </div>
  )
}

export default Stopwatch