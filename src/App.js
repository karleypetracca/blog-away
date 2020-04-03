import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import PostList from "./components/PostList.jsx";
import PostDetail from "./components/PostDetail.jsx";
import PostForm from "./components/PostForm.jsx";
import styled from "styled-components";

const StyledContent = styled.div`
	text-align: center;
	font-size: 1.5rem;
	min-height: calc(100vh - var(--header-height));
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100vw;
`;

function App() {
	return (
		<div className="App">
			<Header />
			<Router>
				<StyledContent>
					<Route path="/" exact component={PostList} />
					<Route path="/post/:post_id?" exact component={PostDetail} />
					<Route path="/postnew" exact component={PostForm} />
				</StyledContent>
			</Router>
		</div>
	);
}

export default App;
