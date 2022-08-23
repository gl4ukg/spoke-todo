import { combineReducers } from "redux";
import { ITodoReducer, todoReducer } from "./todo/reducer";

export interface CombinedReducersState {
    todos: ITodoReducer
}

const combinedReducers = combineReducers({
    todos: todoReducer
})

const rootReducer = (state: CombinedReducersState, action: any) => {
    return combinedReducers(state, action)
}

export default rootReducer;