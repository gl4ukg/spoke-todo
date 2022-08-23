import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import List from "./containers/List/List.container"
import NewTodo from "./containers/NewTodo/NewTodo.container"
import "./App.scss"


const App:React.FC = () => {

  return (
		<BrowserRouter>
			<Fragment>
				<Routes>

					<Route
						path="/"
						element={<List />}
					/>
			
					<Route
						path="/add-new-item/:id"
						element={<NewTodo />}
					/>

				</Routes>
			</Fragment>
		</BrowserRouter>
  )
}

export default App