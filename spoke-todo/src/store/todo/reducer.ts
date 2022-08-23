import produce from "immer";
import { IAction } from "../../types/action.types";
import { ITodo } from "../../types/todo.types";
import * as constants from "./constants";

export interface ITodoReducer {
    isLoading: boolean
    todos: ITodo[]
    todo: ITodo
    todoInput: string
}

const initialState = {
    isLoading: false,
    todos: [] as ITodo[],
    todo: {} as ITodo,
    todoInput: "",
} as ITodoReducer

export const todoReducer = (state = initialState, action: IAction) => 
    produce(state, (draft: any) => {
        switch(action.type) {
            case constants.LOAD_LOADING:
                draft.isLoading = action.payload;
                break;
            case constants.SET_TODO_INPUT:
                draft.todoInput = action.payload;
                break;
            case constants.SET_TODOS:
                draft.todos = action.payload;
                break
            case constants.CREATE_TODO:
                draft.todos = [...draft.todos, action.payload];
                break;
            case constants.GET_TODO:
                draft.todo = action.payload;
                break;
            case constants.UPDATE_DONE_STATUS:
                draft.todos = action.payload;
                break;
            case constants.DELETE_TODO:
                draft.todos = draft.todos.filter((item: ITodo) => item.id !== action.payload)
                break;
        }
    })
