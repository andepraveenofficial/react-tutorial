import React, { useState, useEffect } from 'react'

const FunctionalComponent = () => {
  console.log("FunctionalComponent render");

    // State
    const [count, setCount] = useState(0)

    // Effect
    useEffect(() => {
      console.log("mount & update")

      return () => {
        console.log("unmount or before next update")
      };
    }, [count])

    // Methods
    const handleIncrement = () => {
      console.log("handleIncrement button")
      setCount(count + 1)
    }

  return (
    <div>
      I am FunctionalComponent
      <div>
          <span>{count}</span>
          <button onClick={handleIncrement}>Count</button>
      </div>
    </div>
  )
}

export default FunctionalComponent
