import { FC } from "react"
import { PlusOutlined } from "@ant-design/icons"
import "./Button.scss"

interface Props {
    title: string
    isIcon: boolean
    onClick?: () => void
}

const Button = ({title, isIcon, onClick}: Partial<Props>) => {
    return (
        <button 
            data-testid="button-id"
            className="button"
            onClick={onClick}
        >
            {isIcon && <PlusOutlined />}
            <p>{title}</p>
        </button>
    )
}

export default Button