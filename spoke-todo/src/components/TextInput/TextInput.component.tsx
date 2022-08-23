import { ChangeEvent } from "react"
import "./TextInput.scss"

interface Props {
    label: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<Props> = (props: Props) => {
    return (
        <div className="text-input">
            <label>{props.label}</label>
            <input 
                className="todo-input"
                type="text"
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default TextInput