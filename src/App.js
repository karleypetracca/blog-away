import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import PostList from "./components/PostList.jsx";
import PostDetail from "./components/PostDetail.jsx";

function App() {
	return (
		<div className="App">
			<Header />
			<Router>
				<Route path="/" exact component={PostList} />
				<Route path="/post/:post_id?" exact component={PostDetail} />
			</Router>
		</div>
	);
}

export default App;
