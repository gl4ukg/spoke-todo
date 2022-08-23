import { UnorderedListOutlined } from "@ant-design/icons"
import { ReactElement } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button/Button.component"
import "./TodoWrapper.scss"

interface Props {
    title: string
    buttonTitle: string
    navigation: () => void
    children: ReactElement
}

const TodoWrapper = ({title, buttonTitle, navigation, children}: Partial<Props>) => {

    const navigate = useNavigate()

    return (
        <div 
            data-testid="list-wrapper-id"
            className="list-wrapper">
            <div className="title-wrapper">
                <UnorderedListOutlined 
                    className="unordered-list-icon" 
                    onClick={() => navigate("/")} 
                />
                <p>{title}</p>
            </div>
            <div className="list">
                {children}
                <Button 
                    title={buttonTitle}
                    onClick={navigation}
                    isIcon={true} />
            </div>
        </div>
    )
}

export default TodoWrapper