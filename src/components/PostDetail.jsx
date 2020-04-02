import React, { useState, useEffect } from "react";
import { getAPI } from "../utilities/getAPI";

function PostDetail(props) {
	const [post, setPost] = useState({});

	useEffect(() => {
		const getPost = async () => {
			const { post_id } = props.match.params;
			const url = `http://localhost:5000/api/post/${post_id}`;
			const data = await getAPI(url);
			setPost(data);
			console.log(data);
		};

		getPost();
	}, [props.match.params]);

	return (
		<div>
			<p>Individual blog post</p>
			<h2>{post.title}</h2>
			<p>
				<i>Posted by {post.author}</i>
			</p>
			<p>{post.post}</p>
		</div>
	);
}

export default PostDetail;
