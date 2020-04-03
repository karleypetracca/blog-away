import React, { useState, useEffect } from "react";
import { getAPI } from "../utilities/getAPI";
import styled from "styled-components";

const StyledCommentList = styled.div`
	color: var(--dark);
	display: flex;
	flex-direction: column;
	text-align: left;
	margin: 10px auto;
	max-width: var(--lg-container);
	width: 100vw;
	padding: 30px;

	* {
		margin: 10px 0;
		width: 100%;
		max-width: var(--lg-container);
	}

	* * {
		width: 100%;
	}

	h3 {
		color: var(--primary);
	}
`;

function CommentList(props) {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const getComments = async () => {
			const { post_id } = props.match.params;
			const url = `http://localhost:5000/api/comments/${post_id}`;
			const data = await getAPI(url);
			setComments(data);
			console.log(data);
		};

		getComments();
	}, [props.match.params]);

	const commentList = comments.map((comment, index) => {
		return (
			<div key={index}>
				<p>
					{comment.comment} <i>- {comment.comment_author}</i>
				</p>
			</div>
		);
	});

	return (
		<StyledCommentList>
			<h3>Comments:</h3>
			{commentList}
		</StyledCommentList>
	);
}

export default CommentList;
