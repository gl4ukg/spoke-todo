import { FC } from "react";
import { CheckCircleOutlined, DeleteOutlined, MinusCircleOutlined } from "@ant-design/icons";
import classNames from "classnames";
import "./TodoItem.scss"

interface Props {
    title: string
    status: boolean
    onClick: () => void
}

const TodoItem: FC<Props> = (props: Props) => {
    
    return (
        <div 
            onClick={props.onClick}
            className="to-do-item">
            <div className="to-do-item--with-icon">
                {!props.status
                    ? <MinusCircleOutlined />
                    : <CheckCircleOutlined />
                }
                <p className={classNames("to-do-item--title", {
                    "to-do-item--done": props.status
                })}>{props.title}</p>
            </div>
            <DeleteOutlined />
        </div>
    )
}

export default TodoItem