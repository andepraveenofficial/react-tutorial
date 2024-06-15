import React, { useState } from 'react'


const hardData = [
    {
        id: 1,
        item: "first"
    },
    {
        id: 2,
        item: "second"
    },
    {
        id: 3,
        item: "third"
    },
    {
        id: 4,
        item: "fourth"
    },
]

const TodoList = () => {
    const [todoList, setTodoList] = useState(hardData)
    const [todo, setTodo] = useState("");
    return (
        <div>
            <div>
                <input type="text" placeholder='Enter Todo' onChange={(event) => { setTodo(event.target.value) }} value={todo} />
                <button onClick={() => setTodoList([...todoList, { item: todo, id: todoList.length + 1 }])}>Add Todo</button>
            </div>
            <ul>
                {todoList.map((each) => <li key={each.id}>
                    <span>{each.item}</span><button onClick={() => {
                        let filteredList = todoList.filter((child) => each.id !== child.id)
                        setTodoList(filteredList)
                    }}>delete</button>
                </li>)}
            </ul>

        </div>
    )
}

export default TodoList