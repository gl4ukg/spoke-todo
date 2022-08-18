import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import List from "./containers/List/List.container"
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
						path="/add-new-item"
						element={<List />}
					/>

				</Routes>
			</Fragment>
		</BrowserRouter>
  )
}

export default App