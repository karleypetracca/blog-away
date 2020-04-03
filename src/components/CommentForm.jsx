import React, { useState } from "react";
import { getAPI } from "../utilities/getAPI";
import styled from "styled-components";

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
		border-radius: 4px;
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
	const [author, setAuthor] = useState(0);
	const [post_id, setPostID] = useState(0);

	const changeComment = (event) => {
		setComment(event.target.value);
		setAuthor(1);
		setPostID(Number(props.match.params.post_id));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(comment, author, post_id);
		setComment("");
		setAuthor(0);
		setPostID(0);
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
