import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import { 
    createTodo as createTodoService,
    updateTodo as updateTodoService,
    deleteTodo as deleteTodoService,
    getTodos as getTodosService,
    updateDoneStatus as updateDoneStatusService,
    getTodoById as getTodoByIdService,
} from "../../services/todo.service";
import { IAction } from "../../types/action.types";
import { ITodo } from "../../types/todo.types";
import { setLoading, createTodo, updateTodo, deleteAction, setTodos, loadTodos as loadTodosAction, getTodo, setTodoInput } from "./actions";
import * as constants from "./constants"


function* loadTodos() {
    yield put(setLoading(true))
    try {
        const response: AxiosResponse<ITodo[]> = yield call(getTodosService)
        yield put(setTodos(response.data))
        yield put(setLoading(false))
        toast.info("Todo loaded!")
    } catch {
        toast.error("Something went wrong!")
        yield put(setLoading(false))
    }
}

function* loadCreateTodo(action: IAction) {
    yield put(setLoading(true))
    try {
        const response: AxiosResponse<ITodo> = yield call(createTodoService, action.payload)
        yield put(createTodo(response.data))
        yield put(setLoading(false))
        toast.info("Todo created!")
    } catch {
        toast.error("Something went wrong!")
        yield put(setLoading(false))
    }
}

function* loadGetTodoById(action: IAction) {
    yield put(setLoading(true))
    try {
        const response: AxiosResponse<ITodo> = yield call(getTodoByIdService, action.payload)
        yield put(getTodo(response.data))
        yield put(setTodoInput(response.data.name))
        yield put(setLoading(false))
    } catch {
        toast.error("Something went wrong!")
        yield put(setLoading(false))
    }
}

function* loadUpdateTodo(action: IAction) {
    yield put(setLoading(true))
    try {
        const response: AxiosResponse<ITodo> = yield call(updateTodoService, action.payload)
        yield put(updateTodo(response.data))
        yield put(setLoading(false))
        toast.info("Todo updated!")
    } catch {
        toast.error("Something went wrong!")
        yield put(setLoading(false))
    }
}


function* loadUpdateDoneStatus(action: IAction) {
    yield put(setLoading(true))
    try {
        yield call(updateDoneStatusService, action.payload)
        yield put(loadTodosAction())
        yield put(setLoading(false))
        toast.info("Task status has been changed!")
    } catch {
        toast.error("Something went wrong!")
        yield put(setLoading(false))
    }
}

function* loadDeleteTodo(action: IAction) {
    yield put(setLoading(true))
    try {
        yield call(deleteTodoService, action.payload)
        yield put(deleteAction(action.payload))
        yield put(setLoading(false))
        toast.info("Task has been deleted!")
    } catch {
        toast.error("Something went wrong!")
        yield put(setLoading(false))
    }
}

export default function* todoSaga() {
    yield takeLatest(constants.LOAD_SET_TODOS, loadTodos)
    yield takeLatest(constants.LOAD_CREATE_TODO, loadCreateTodo)
    yield takeLatest(constants.LOAD_GET_TODO, loadGetTodoById)
    yield takeLatest(constants.LOAD_UPDATE_TODO, loadUpdateTodo)
    yield takeLatest(constants.LOAD_UPDATE_DONE_STATUS, loadUpdateDoneStatus)
    yield takeLatest(constants.LOAD_DELETE_TODO, loadDeleteTodo)
}