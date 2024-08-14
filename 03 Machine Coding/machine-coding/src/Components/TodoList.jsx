import React, { useState } from "react";

const hardData = [
  {
    id: 1,
    item: "first",
  },
  {
    id: 2,
    item: "second",
  },
  {
    id: 3,
    item: "third",
  },
];

const TodoList = () => {
  const [todoList, setTodoList] = useState(hardData);
  const [todo, setTodo] = useState("");

  // Methods
  const handleAddTodo = () => {
    const todoItem = {
      id: new Date(),
      item: todo,
    };
    const updatedTodoList = [...todoList, todoItem];
    setTodoList(updatedTodoList);
    setTodo("");
  };

  const handleDelete = (todoId) => {
    const filteredList = todoList.filter((item) => todoId !== item.id);
    setTodoList(filteredList);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Todo"
          onChange={(event) => {
            setTodo(event.target.value);
          }}
          value={todo}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todoList.map((each) => (
          <li key={each.id}>
            <span>{each.item}</span>
            <button
              onClick={() => handleDelete(each.id)}
              style={{ margin: "10px" }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
