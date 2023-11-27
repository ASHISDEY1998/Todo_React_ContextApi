import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        todoMessage: '',
        id: 1,
        isCompleted: false,
    }],
    createTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext)
}