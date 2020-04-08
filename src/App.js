import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import PostList from "./components/PostList.jsx";
import PostDetail from "./components/PostDetail.jsx";
import PostForm from "./components/PostForm.jsx";
import UserLogin from "./components/UserLogin.jsx";
import UserSignup from "./components/UserSignup.jsx";

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
			<Nav />
			<StyledContent>
				<Router basename="/blog-away">
					<Route path="/" exact component={PostList} />
					<Route path="/post/:post_id?" exact component={PostDetail} />
					<Route path="/postnew" exact component={PostForm} />
					<Route path="/user/login" exact component={UserLogin} />
					<Route path="/user/signup" exact component={UserSignup} />
				</Router>
			</StyledContent>
		</div>
	);
}

export default App;
