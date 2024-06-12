import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([
    'Go to gym',
    'Buy milk',
    'Meeting tomorrow'
  ]);

  return (
    <>
      <TodoInput />
      <TodoList todos={todos} />
    </>
  )
}

export default App
