import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import TextInput from "../../components/TextInput/TextInput.component";
import TodoWrapper from "../../components/TodoWrapper/TodoWrapper.component"
import { 
    loadCreateTodo as loadCreateTodoAction, 
    loadUpdateTodo as loadUpdateTodoAction,
    loadGetTodo as loadGetTodoAction
} from "../../store/todo/actions";
import { ITodo, IUpdateTodo } from "../../types/todo.types";

interface Props {

}

const NewTodo: React.FC<Props> = (props: Props) => {

    const { id } = useParams()
    const dispatch = useDispatch();
    const [todo, setTodo] = useState<string>("");

    const handleCreateTodo = useCallback((state: ITodo) => dispatch(loadCreateTodoAction(state)), [dispatch]);
    const editTodo = useCallback((state: IUpdateTodo) => dispatch(loadUpdateTodoAction(state)), [dispatch]);
    const getTodoById = useCallback((state: number) => dispatch(loadGetTodoAction(state)), [dispatch]);


    useEffect(() => {
        if(id) {
            getTodoById(Number(id))
        }
    }, [])

    const handleSubmit = () => {
        if(todo) {
            if(id){
                const item = {
                    id: Number(id),
                    todo: {
                        name:todo
                    } as ITodo
                } as IUpdateTodo
                editTodo(item)
            }else {
                const item = {
                    name: todo,
                } as ITodo
                handleCreateTodo(item)
                setTodo("")
            }
        } else {
            toast.error("Please fill input")
        }
    }

    return (
        <div className="to-do-container">
            <TodoWrapper
                title="Create todo"
                navigate={handleSubmit}
                buttonTitle="Create todo"
                children={
                    <TextInput
                        value={todo}
                        label="todo"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
                    />
                }
            />
        </div>
    )
}

export default NewTodo