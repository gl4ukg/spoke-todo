import { useCallback, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import TodoItem from "../../components/TodoItem/TodoItem.component"
import TodoWrapper from "../../components/TodoWrapper/TodoWrapper.component"
import { CombinedReducersState } from "../../store/combinedReducers"
import { loadDelete, loadTodos, loadUpdateDoneStatus } from "../../store/todo/actions"
import { ITodo } from "../../types/todo.types"
import "./List.scss"

const List: React.FC = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const todos: ITodo[] | undefined = useSelector((state: CombinedReducersState) => state.todos?.todos);
    const isLoading: boolean | undefined = useSelector((state: CombinedReducersState) => state.todos?.isLoading);
    
    const getTodos = useCallback(() => dispatch(loadTodos()),[dispatch])
    const deleteTodo = useCallback((state: number) => dispatch(loadDelete(state)),[dispatch])
    const updateDoneStatus = useCallback((state: number) => dispatch(loadUpdateDoneStatus(state)),[dispatch])

    useEffect(() => {
        getTodos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="to-do-container">
            <TodoWrapper 
                title="To do List"
                buttonNavigation={() => navigate("/add-new-item")}
                iconNavigation={() => navigate("/")}
                buttonTitle="New task"
                children={
                    <div className="list-items">
                        {todos?.map((item: ITodo) => 
                            <TodoItem 
                                isLoading={isLoading}
                                loadingCount={todos?.length}
                                key={item.id}
                                title={item.name}
                                status={Boolean(item.is_done)}
                                updateTodo={() => navigate(`add-new-item/${item.id}`)}
                                updateStatusTodo={() => updateDoneStatus(Number(item.id))}
                                deleteTodo={() => deleteTodo(Number(item.id))} />
                        )}
                    </div>
                }
            />
        </div>
    )
}

export default List