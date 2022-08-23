import axios from "axios"
import { ITodo, IUpdateTodo } from "../types/todo.types"

export const getTodos = (): Promise<ITodo[]> => {
    return axios.get('task')
}

export const getTodoById = (idx: number): Promise<ITodo[]> => {
    return axios.get(`task/${idx}`)
}

export const createTodo = (payload: ITodo): Promise<ITodo[]> => {
    return axios.post('task', payload)
}

export const updateTodo = (payload: IUpdateTodo): Promise<ITodo> => {
    return axios.put(`task/${payload.id}`, payload.todo)
}

export const deleteTodo = (id: number): Promise<ITodo> => {
    return axios.delete(`task/${id}`)
}

export const updateDoneStatus = (id: number): Promise<ITodo> => {
    return axios.put(`task/done/${id}`)
}