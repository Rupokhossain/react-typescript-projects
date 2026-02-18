import { useState } from "react"
import type { Todo } from "../types/todo"


export const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text:string) => {
        const newTodo: Todo = {
            id: Date.now().toString(),
            text,
            completed: false
        }
        setTodos(prevTodos => [...prevTodos, newTodo])
    }

    const toggleTodo = (id:string) => {
        setTodos((prevTodos) => prevTodos.map(todo => todo.id === id ? {...todo, completed: !todo.completed}: todo))
    }

    const removeTodo = (id:string) => {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id))
    }

    return {
        todos,
        addTodo,
        toggleTodo,
        removeTodo
    }
}