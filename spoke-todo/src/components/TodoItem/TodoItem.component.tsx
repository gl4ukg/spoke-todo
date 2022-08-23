import { FC } from "react";
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

const TodoItem: FC<Props> = (props: Props) => {
    
    if(props.isLoading) {
        return <Skeleton count={props.loadingCount} />
    }
    return (
        <div 
            className="to-do-item">
            <div className="to-do-item--with-icon">
                {!props.status
                    ? <MinusCircleOutlined onClick={props.updateStatusTodo} />
                    : <CheckCircleOutlined onClick={props.updateStatusTodo} />
                }
                <p 
                onClick={props.updateTodo}
                className={classNames("to-do-item--title", {
                    "to-do-item--done": props.status
                })}>{props.title}</p>
            </div>
            <DeleteOutlined onClick={props.deleteTodo} />
        </div>
    )
}

export default TodoItem