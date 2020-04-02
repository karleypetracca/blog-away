import React, { useState, useEffect } from "react";
import { getAPI } from "../utilities/getAPI";

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
		<div>
			<h3>Comments:</h3>
			{commentList}
		</div>
	);
}

export default CommentList;
