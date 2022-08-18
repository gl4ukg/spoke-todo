import { UnorderedListOutlined } from "@ant-design/icons"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button/Button.component"
import TodoItem from "../../components/TodoItem/TodoItem.component"
import "./List.scss"

const List: React.FC = () => {

    const navigate = useNavigate()
    const [todos, setTodos] = useState<object[]>([
        {
            title: "one",
            status: false
        },
        {
            title: "two",
            status: true
        },
        {
            title: "three",
            status: false
        }
    ])

    return (
        <div className="to-do-list">
            <div className="list-wrapper">
                <div className="title-wrapper">
                    <UnorderedListOutlined />
                    <p>To do List</p>
                </div>
                <div className="list">
                    <div className="list-items">
                        {todos.map((item: any) => 
                            <TodoItem 
                                title={item.title}
                                status={item.status}
                                onClick={() => {}} />
                        )}
                    </div>
                    <Button
                        onClick={() => navigate("/add-new-item")}
                        />
                </div>
            </div>
        </div>
    )
}

export default List