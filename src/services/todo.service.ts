import axios from "axios"

export const getToDoList = (): Promise<any> => {
    return axios.get('todos')
}