import { useState } from 'react';

let initialCounters = [
  0, 0, 0
];
let results =["results" , "results" , "results"] ;

export default function CounterList() {
  const [counters, setCounters] = useState(
    initialCounters
  );

  function handleIncrementClick(index) {
setCounters( counters.map((number,i)=>{ 
    if(index === i){
          results[i]="results";
return number + 1
    }else{
return number
    }
  }))
}

  function handleDicrementClick(index) {
setCounters( counters.map((number,i)=>{ 

    if(index === i){
          if(number <= 1){
            results[i]=null;
    return null
  }
return number - 1
    }else{
return number
    }
  }))
}


function handle0Click(index) {
setCounters( counters.map((number,i)=>{ 
    if(index === i){
         results[i]="results";
return number=0;
    }else{
return number
    }
  }))
}

function handleNullClick(index) {
setCounters( counters.map((number,i)=>{ 
    if(index === i){
return number=null;
    }else{
return number
    }
  }))
}

  return (
    <ul>
{counters.map((number,i) =>{
    return <li  key={i}>{results[i]} : {number}  <button onClick={() => {
            handleIncrementClick(i);
          }}>+1</button> <button onClick={() => {
            handleDicrementClick(i);
          }}>-1</button>  <button onClick={() => {
            handle0Click(i);
          }}>0</button>  <button onClick={() => {
            handleNullClick(i);
          }}>dell</button></li>;
})}
    </ul>
  );
}
