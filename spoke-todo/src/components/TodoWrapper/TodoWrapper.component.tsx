import { UnorderedListOutlined } from "@ant-design/icons"
import { ReactElement } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button/Button.component"
import "./TodoWrapper.scss"

interface Props {
    title: string
    buttonTitle: string
    navigate: () => void
    children: ReactElement
}

const TodoWrapper: React.FC<Props> = (props: Props) => {

    const navigate = useNavigate()

    return (
        <div className="list-wrapper">
            <div className="title-wrapper">
                <UnorderedListOutlined onClick={() => navigate("/")} />
                <p>{props.title}</p>
            </div>
            <div className="list">
                {props.children}
                <Button 
                    title={props.buttonTitle}
                    onClick={props.navigate} />
            </div>
        </div>
    )
}

export default TodoWrapper