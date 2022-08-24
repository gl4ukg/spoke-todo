import { ChangeEvent } from "react"
import Skeleton from "react-loading-skeleton"
import "./TextInput.scss"

interface Props {
    label: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    isLoading: boolean
}

const TextInput = ({
    label, 
    value, 
    onChange, 
    isLoading
}: Partial<Props>) => {

    if(isLoading) {
        return <div data-testid="is-loading">
            <Skeleton />
        </div>
    }
    return (
        <div data-testid="text-input" className="text-input">
            <label>{label}</label>
            <input 
                aria-label="todo-input"
                className="todo-input"
                type="text"
                value={value || ""}
                defaultValue={value || ""}
                onChange={onChange}
            />
        </div>
    )
}

export default TextInput