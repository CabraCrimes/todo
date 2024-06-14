import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const handleAddTodos = (todoValue) =>{
    const newTodoList = [...todos, todoValue]
    setTodos(newTodoList)
  }

  const handleDeleteTodo = (index) => {
    const deleteTodo = todos.filter((_, todoIndex) =>{
      return todoIndex !== index;
    })
    setTodos(deleteTodo)
  };

  const handleEditTodo = (index) => {
    const editTodo = todos[index]
    setTodoValue(editTodo)
    handleDeleteTodo(index)

  };

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  )
}

export default App
