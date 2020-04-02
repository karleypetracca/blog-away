import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostList from "./components/PostList.jsx";
import PostDetail from "./components/PostDetail.jsx";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Blog Away</p>
			</header>
			<Router>
				<Route path="/" exact component={PostList} />
				<Route path="/post/:post_id?" exact component={PostDetail} />
			</Router>
		</div>
	);
}

export default App;
