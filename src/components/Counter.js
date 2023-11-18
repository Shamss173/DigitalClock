import React,{useEffect,useState} from 'react';

const Counter =()=>{
    const [count, setCount]=useState(0)
useEffect(()=>{
setTimeout(()=>{
    setCount(count+1)
},1000);
},[])
return <h1>{count}</h1>
    
}
export default Counter;