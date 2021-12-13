import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodo} from "../../models/interfaces/ITodos";

interface IStateTodo {
    todos: ITodo[]
    isLoading: boolean
    error: string | null

}

interface ISaving{
    id: string
    text: string
}

interface IToggle {
    id: string
    completed: boolean

}

const initialState: IStateTodo = {
    todos: [],
    isLoading: false,
    error: null,
}


export const todoSlice = createSlice({
    name: 'fetchTodos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state: IStateTodo, action: PayloadAction<number | string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleCompleted: (state: IStateTodo, action: PayloadAction<any>) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id)
            state.todos[index].completed = action.payload.completed
        },
        savingText: (state:IStateTodo, action:PayloadAction<any>) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id)
            state.todos[index].title = action.payload.text
        }
    }

})

export const {addTodo, deleteTodo, toggleCompleted,savingText} = todoSlice.actions
export default todoSlice.reducer