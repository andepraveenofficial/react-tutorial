import { createContext, useContext } from 'react'


const MyContext = createContext({ name: "Default" })


const Parent = () => {
    return <div><Child /></div>
}

const Child = () => {
    const context = useContext(MyContext)
    const { name } = context

    return <div>
        <p>Child</p>
        <p>{name}</p>
    </div>
}


const ReactContext = () => {
    return (
        <MyContext.Provider value={{ name: "React" }} >
            <div>
                <Parent />
            </div>
        </MyContext.Provider>

    )
}

export default ReactContext