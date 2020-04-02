import React, { useState, useEffect } from "react";
import { getAPI } from "../utilities/getAPI";

function PostList() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			const url = "http://localhost:5000/api/posts";
			const data = await getAPI(url);
			setPosts(data);
			console.log(data);
		};

		getPosts();
	}, []);

	const postList = () => {
		return (
			<div>
				<h3>{posts.title}</h3>
				<p>
					<e>Posted by {posts.author_id}</e>
				</p>
				<p>{posts.post}</p>
			</div>
		);
	};

	return (
		<div>
			<h2>List of posts</h2>
			{postList()}
		</div>
	);
}

export default PostList;
