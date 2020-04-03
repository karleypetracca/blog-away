import React, { useState } from "react";
import styled from "styled-components";
import { postAPI } from "../utilities/postAPI";

const StyledHeader = styled.div`
	color: var(--primary);
	text-align: left;
	margin: 10px auto;
	max-width: var(--lg-container);
	width: 100vw;
	padding: 30px;

	form {
		display: flex;
		align-items: center;
	}

	input {
		padding: 5px;
		margin: 5px;
		min-height: 300px;
	}

	button {
		padding: 10px;
		margin: 5px;
		border-style: none;
		border-radius: 4px;
		font-weight: bold;
		background-color: var(--dark-secondary);
	}
`;

function CommentForm(props) {
	const [comment, setComment] = useState("");
	const [author_id, setAuthor] = useState(0);
	const [post_id, setPostID] = useState(0);

	const changeComment = (event) => {
		setComment(event.target.value);
		setAuthor(1);
		setPostID(Number(props.match.params.post_id));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = { comment, author_id, post_id };
		addComment(data);
		setComment("");
		setAuthor(0);
		setPostID(0);
	};

	const addComment = async (data) => {
		const url = "http://localhost:5000/post/comment";
		const response = await postAPI(url, data);
		if (response.status === 200) {
			alert("Comment Saved!");
		}
		if (response.status !== 200) {
			alert("Comment was unable to be saved. Please try again later.");
		}
	};

	return (
		<StyledHeader>
			<h3>Add a comment below:</h3>
			<form onSubmit={handleSubmit}>
				<textarea
					value={comment}
					onChange={changeComment}
					placeholder="Type comment here"
				/>
				<button type="submit">Add comment</button>
			</form>
		</StyledHeader>
	);
}

export default CommentForm;
