import React, { useState, useEffect } from "react";
import { getAPI } from "../utilities/getAPI";

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
			<div key={index}>
				<h3>{post.title}</h3>
				<p>
					<i>Posted by {post.author}</i>
				</p>
				<p>{post.post}</p>
			</div>
		);
	});

	return (
		<div>
			<h2>List of posts</h2>
			{postList}
		</div>
	);
}

export default PostList;
