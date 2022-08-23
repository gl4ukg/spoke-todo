import { FC } from "react"
import { PlusOutlined } from "@ant-design/icons"
import "./Button.scss"

interface Props {
    title: string
    isIcon: boolean
    onClick?: () => void
}

const Button: FC<Props> = (props:Props) => {
    return (
        <button 
            onClick={props.onClick}
            className="button">
            {props.isIcon && <PlusOutlined />}
            <p>{props.title}</p>
        </button>
    )
}

export default Button