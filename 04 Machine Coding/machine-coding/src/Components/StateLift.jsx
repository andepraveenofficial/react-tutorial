import React, { useState } from 'react'



const Child = (props) => {

    const { setParentText } = props
    // console.log(setParentText)

    return <div>
        <button onClick={() => setParentText("Parent Text Changed")}>Child Button</button>
    </div>
}


const Parent = () => {
    const [parentText, setParentText] = useState("I am Parent")
    return <div>
        <p>{parentText}</p>
        <Child setParentText={setParentText} />
    </div>
}



const StateLift = () => {
    return (
        <div>
            <Parent />
        </div>
    )
}

export default StateLift