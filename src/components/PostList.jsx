import React, { useState, useEffect } from "react";
import { getAPI } from "../utilities/getAPI";

import styled from "styled-components";

const StyledHero = styled.div`
	background-color: var(--background);
	color: var(--dark);
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	height: 40vh;
	width: 100vw;

	* {
		width: var(--lg-container);
	}

	* * {
		width: 100%;
	}
`;

const StyledPostList = styled.div`
	color: var(--dark);
	min-width: 100vw;
	text-align: left;
	margin-top: 10px;
	background-color: var(--white);
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;

	* {
		width: var(--lg-container);
		margin-top: 10px;
	}

	* * {
		width: 100%;
		margin: 0;
	}

	h2 {
		color: var(--primary);
	}

	.post {
		margin-top: 20px;
		background-color: var(--dark-secondary);
		color: var(--white);
		padding: 10px;
		border-radius: 4px;
	}

	.name {
		color: var(--secondary);
	}
`;

function PostList() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			const url = `http://localhost:5000/api/posts`;
			const data = await getAPI(url);
			setPosts(data);
			console.log(data);
		};

		getPosts();
	}, []);

	const postList = posts.map((post, index) => {
		return (
			<div className="post" key={index}>
				<a href={"/post/" + post.id}>
					<h3>{post.title}</h3>
					<p className="name">
						<i>Posted by {post.author}</i>
					</p>
				</a>
			</div>
		);
	});

	return (
		<>
			<StyledHero>
				<h1>Welcome to Blog Away!</h1>
			</StyledHero>
			<StyledPostList>
				<div className="container">
					<h2>See our most recent posts below...</h2>
					<br />
					{postList}
				</div>
			</StyledPostList>
		</>
	);
}

export default PostList;
