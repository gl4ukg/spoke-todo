import { ChangeEvent } from "react"
import Skeleton from "react-loading-skeleton"
import "./TextInput.scss"

interface Props {
    label: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    isLoading: boolean
}

const TextInput: React.FC<Props> = (props: Props) => {

    if(props.isLoading) {
        return <Skeleton />
    }
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