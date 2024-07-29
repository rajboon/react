import React from 'react';
import { useState } from 'react';

const Content1 = () => {
    const [name, setName] = useState("Earn");
    function handleNameChange(){
        const names=["Earn","Grow","Give"];
        const int=Math.floor(Math.random()*3);
        console.log(names[int]);
        setName(names[int]);
    }

    const [count, setCount] = useState(99);
    function decrementFunction(){
        setCount(count -3)
    }
    function incrementFunction(){
        setCount(count +3)
    }
  return (
    <main>
        <p>lets {name} money</p>
        <button onClick={handleNameChange}>subscribe</button>

        <button onClick={decrementFunction}>-</button>
        <span>{count}</span>
        <button onClick={incrementFunction}>+</button>
    </main>
  )
}

export default Content1