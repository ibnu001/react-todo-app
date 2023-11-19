"use client"

import { Todo } from "@/types/Todo"
import { useState } from "react"
import TodoList from "./components/TodoList/TodoList"
import AddTodo from "./components/AddTodo/AddTodo"

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  )
}
