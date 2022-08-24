import { UnorderedListOutlined } from "@ant-design/icons"
import { ReactElement } from "react"
import Button from "../../components/Button/Button.component"
import "./TodoWrapper.scss"

interface Props {
    title: string
    buttonTitle: string
    buttonNavigation: () => void
    iconNavigation: () => void
    children: ReactElement
}

const TodoWrapper = ({
    title, 
    buttonTitle, 
    children, 
    buttonNavigation, 
    iconNavigation
}: Partial<Props>) => {


    return (
        <div 
            data-testid="list-wrapper-id"
            className="list-wrapper">
            <div className="title-wrapper">
                <UnorderedListOutlined 
                    className="unordered-list-icon" 
                    data-testid="icon-navigate-id"
                    onClick={iconNavigation} 
                />
                <p>{title}</p>
            </div>
            <div className="list">
                <div data-testid="list-children-id">{children}</div>
                <Button 
                    data-testid="button-id"
                    title={buttonTitle}
                    onClick={buttonNavigation}
                    isIcon={true} />
            </div>
        </div>
    )
}

export default TodoWrapper