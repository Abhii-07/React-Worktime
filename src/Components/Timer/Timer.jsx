import React,{useEffect, useState} from 'react'
import styles from "./Timer.module.css"

const Timer = () => {
  const [timer, setTimer] = useState(0);

 useEffect(()=> {

   const id =  setInterval(() => {
     if( timer >= 14){
      clearInterval(id)
     }
     else{
       setTimer((prev) => prev+1);
     }
  },1000);

  return () => {
    clearInterval(id)
  }
 },[]);

  return (
    <div className={styles.app}>Count Down : {timer} </div>
  )
}

export default Timer