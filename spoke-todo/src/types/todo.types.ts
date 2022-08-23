export interface ITodo {
    id?: number
    name: string,
    is_done?: boolean
}

export interface IUpdateTodo {
    id: number,
    todo: ITodo
}