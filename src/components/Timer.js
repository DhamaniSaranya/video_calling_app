import React, {useState, useEffect} from 'react'
import "./Timer.css";
const Timer = () => {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
var timer;
useEffect(()=>{
timer = setInterval(() =>{
    setSec(sec+1);
    if(sec===59){
        setMin(min+1);
        setSec(0);
    }
},1000)
return () => clearInterval(timer)
});
const restart = ()=>{
    setSec(0);
    setMin(0);
}
const stop =()=> {
    clearInterval(timer);
}
  return (
    <div className='timer_container'>
        <h1>{min<10? "0" + min:min}:{sec<10? "0"+ sec:sec}</h1>
    </div>
  )
}
export default Timer