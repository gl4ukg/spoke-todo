import { ITodo, IUpdateTodo } from '../../types/todo.types'
import * as constants from './constants'

export const setLoading = (payload: boolean) => {
    return {
        type: constants.LOAD_LOADING,
        payload
    }
}

export const loadTodos = () => {
    return {
        type: constants.LOAD_SET_TODOS
    }
}

export const setTodos = (payload: ITodo[]) => {
    return {
        type: constants.SET_TODOS,
        payload
    }
}


export const loadGetTodo = (payload: number) => {
    return {
        type: constants.LOAD_GET_TODO,
        payload
    }
}

export const getTodo = (payload: ITodo) => {
    return {
        type: constants.GET_TODO,
        payload
    }
}

export const loadCreateTodo = (payload: ITodo) => {
    return  {
        type: constants.LOAD_CREATE_TODO,
        payload
    }
}

export const createTodo = (payload: ITodo) => {
    return {
        type: constants.CREATE_TODO,
        payload
    }
}

export const loadUpdateTodo = (payload: IUpdateTodo) => {
    return  {
        type: constants.LOAD_UPDATE_TODO,
        payload
    }
}

export const updateTodo = (payload: ITodo) => {
    return {
        type: constants.UPDATE_TODO,
        payload
    }
}
export const loadUpdateDoneStatus = (payload: number) => {
    return  {
        type: constants.LOAD_UPDATE_DONE_STATUS,
        payload
    }
}

export const updateDoneStatus = (payload: ITodo) => {
    return {
        type: constants.UPDATE_DONE_STATUS,
        payload
    }
}

export const deleteAction = (payload: ITodo) => {
    return {
        type: constants.DELETE_TODO,
        payload
    }
}
export const loadDelete = (payload: Number) => {
    return {
        type: constants.LOAD_DELETE_TODO,
        payload
    }
}

export const setTodoInput = (payload: string) => {
    console.log(payload,"payload a anvje")
    return {
        type: constants.SET_TODO_INPUT,
        payload
    }
}