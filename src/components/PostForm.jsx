import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { postAPI } from "../utilities/postAPI";

const StyledForm = styled.div`
	color: var(--primary);
	text-align: left;
	margin: 10px auto;
	max-width: var(--lg-container);
	width: 100vw;
	padding: 30px;

	h3 {
		margin-bottom: 10px;
	}

	form {
		display: flex;
		flex-direction: column;
	}

	input,
	textarea {
		padding: 5px;
		margin: 5px;
	}

	textarea {
		min-height: 200px;
	}

	button {
		width: 100px;
		padding: 10px;
		margin: 5px;
		border-style: none;
		border-radius: 4px;
		font-weight: bold;
		background-color: var(--dark-secondary);
		cursor: pointer;
	}

	button:hover {
		background-color: var(--dark);
		color: var(--white);
		transition-duration: 0.3s;
	}
`;

function PostForm() {
	const [title, setTitle] = useState("");
	const [post, setPost] = useState("");
	const [author_id, setAuthor] = useState(0);

	const changeTitle = (event) => {
		setTitle(event.target.value);
		setAuthor(1);
	};

	const changePost = (event) => {
		setPost(event.target.value);
		setAuthor(1);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = { title, post, author_id };
		addPost(data);
		setTitle("");
		setPost("");
		setAuthor(0);
	};

	const addPost = async (data) => {
		const url = "http://localhost:5000/post/post";
		const response = await postAPI(url, data);
		if (response.status === 200) {
			alert("Blog Post Submitted!");
		}
		if (response.status !== 200) {
			alert("Blog Post was unable to be saved. Please try again later.");
		}
	};

	return (
		<StyledForm>
			<h3>Submit your blog post below:</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={title}
					onChange={changeTitle}
					placeholder="Add title here"
				/>
				<textarea
					value={post}
					onChange={changePost}
					placeholder="Type blog post here"
				/>
				<button type="submit">Submit</button>
			</form>
		</StyledForm>
	);
}

export default PostForm;
