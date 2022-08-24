import { combineReducers } from "redux";
import { IAction } from "../types/action.types";
import { ITodoReducer, todoReducer } from "./todo/reducer";

export interface CombinedReducersState {
    todos: ITodoReducer
}

const combinedReducers = combineReducers({
    todos: todoReducer
})

const rootReducer = (state: CombinedReducersState, action: IAction) => {
    return combinedReducers(state, action)
}

export default rootReducer;