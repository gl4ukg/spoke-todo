import { FC } from "react"
import { PlusOutlined } from "@ant-design/icons"
import "./Button.scss"

interface Props {
    onClick: () => void
}

const Button: FC<Props> = (props:Props) => {
    return (
        <button 
            onClick={props.onClick}
            className="button">
            <PlusOutlined />
            <p>New task</p>
        </button>
    )
}

export default Button