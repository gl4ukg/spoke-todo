import { CheckCircleOutlined, DeleteOutlined, MinusCircleOutlined } from "@ant-design/icons";
import classNames from "classnames";
import "./TodoItem.scss"
import Skeleton from "react-loading-skeleton";

interface Props {
    title: string
    status: boolean
    updateTodo: () => void
    updateStatusTodo: () => void
    deleteTodo: () => void
    isLoading: boolean
    loadingCount: number
}

const TodoItem = ({
    isLoading, 
    loadingCount, 
    status, 
    updateStatusTodo, 
    updateTodo, 
    title, 
    deleteTodo
}: Partial<Props>) => {
    
    if(isLoading) {
        return <div data-testid="is-loading">
            <Skeleton count={loadingCount} />
        </div>
    }
    return (
        <div 
            data-testid="to-do-item"
            className="to-do-item">
            <div className="to-do-item-with-icon">
                {!status
                    ? <MinusCircleOutlined 
                        className="not-completed" 
                        data-testid="not-completed"
                        onClick={updateStatusTodo}
                    />
                    : <CheckCircleOutlined 
                        className="completed" 
                        data-testid="completed"
                        onClick={updateStatusTodo} 
                    />
                }
                <p 
                onClick={updateTodo}
                data-testid="update-todo"
                className={classNames("to-do-item-title", {
                    "to-do-item-done": status
                })}>{title}</p>
            </div>
            <DeleteOutlined 
                onClick={deleteTodo}
                data-testid="delete-todo"
            />
        </div>
    )
}

export default TodoItem