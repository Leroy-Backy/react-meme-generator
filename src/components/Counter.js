import {useState} from "react";

export default function Counter() {
  const [num, setNum] = useState(0);
  
  function add() {
    setNum(n => n+1)
  }

  function sub() {
    setNum(n => n-1)
  }
  
  return (<div>
    <div onClick={sub}>( - )</div>
    <CounterNumber num={num}/>
    <div onClick={add}>( + )</div>
  </div>)
}

function CounterNumber(props) {
  return (<div>
    {props.num}
  </div>)
}