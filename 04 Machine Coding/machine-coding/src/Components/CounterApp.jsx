import React, { useState } from 'react'

const CounterApp = () => {
    console.log("CounterApp")
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <button onClick={() => setCounter((pre) => pre - 1)}>-</button>
            <span>{counter}</span>
            <button onClick={() => setCounter((pre) => pre + 1)}>+</button>
        </div>
    )
}

export default CounterApp