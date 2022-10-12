import { Route, Routes } from "react-router-dom";
// import Comments from "./components/Comments";
import TaskContainer from "./components/TaskContainer";
// import Login from "./components/Login";

function App() {
	return (
		<div>
			<Routes>
				{/* <Route path='/' element={<Login />} /> */}
				<Route path='/task' element={<TaskContainer />} />
				{/* <Route path='/comments/:category/:id' element={<Comments />} /> */}
			</Routes>
		</div>
	);
}

export default App;