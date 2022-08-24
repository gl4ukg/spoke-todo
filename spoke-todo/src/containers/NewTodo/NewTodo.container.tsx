import { ChangeEvent, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import TextInput from "../../components/TextInput/TextInput.component";
import TodoWrapper from "../../components/TodoWrapper/TodoWrapper.component"
import { CombinedReducersState } from "../../store/combinedReducers";
import { 
    loadCreateTodo as loadCreateTodoAction, 
    loadUpdateTodo as loadUpdateTodoAction,
    loadGetTodo as loadGetTodoAction,
    setTodoInput
} from "../../store/todo/actions";
import { ITodo, IUpdateTodo } from "../../types/todo.types";
import "./NewTodo.scss"

const NewTodo: React.FC = () => {

    const { id } = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoading: boolean | undefined = useSelector((state: CombinedReducersState) => state.todos?.isLoading)
    const todo: string | undefined = useSelector((state: CombinedReducersState) => state.todos?.todoInput)

    const setTodo = useCallback((state: string) => dispatch(setTodoInput(state)), [dispatch]);
    const handleCreateTodo = useCallback((state: ITodo) => dispatch(loadCreateTodoAction(state)), [dispatch]);
    const editTodo = useCallback((state: IUpdateTodo) => dispatch(loadUpdateTodoAction(state)), [dispatch]);
    const getTodoById = useCallback((state: number) => dispatch(loadGetTodoAction(state)), [dispatch]);


    useEffect(() => {
        if(id) {
            getTodoById(Number(id))
        }
        setTodo("")
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const pageTitle = () => {
        if(id) return "Update todo"
        return "Create todo"

    }

    return (
        <div className="to-do-container">
            <TodoWrapper
                title={pageTitle()}
                buttonNavigation={handleSubmit}
                iconNavigation={() => navigate("/")}
                buttonTitle={pageTitle()}
                children={
                    <div className="new-to-do-text-input">
                        <TextInput
                            isLoading={isLoading}
                            value={todo}
                            label="todo"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
                        />
                    </div>
                }
            />
        </div>
    )
}

export default NewTodo