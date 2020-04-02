import React from "react";
import PostList from "./components/PostList.jsx";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Blog Away</p>
			</header>
			<section>
				<PostList />
			</section>
		</div>
	);
}

export default App;
