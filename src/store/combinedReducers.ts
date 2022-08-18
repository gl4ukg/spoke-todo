import { combineReducers } from "redux";

export interface CombinedReducersState {
}

const combinedReducers = combineReducers({
})

const rootReducer = (state: CombinedReducersState, action: any) => {
    return combinedReducers(state, action)
}

export default rootReducer;