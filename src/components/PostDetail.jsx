import React, { useState, useEffect } from "react";
import { getAPI } from "../utilities/getAPI";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

import CommentForm from "../components/CommentForm.jsx";
import CommentList from "../components/CommentList.jsx";

import styled from "styled-components";

const StyledHeader = styled.div`
	color: var(--dark-secondary);
	background-color: var(--white);
	text-align: left;
	width: 100vw;

	* {
		margin: 10px 0;
	}

	.header {
		max-width: var(--lg-container);
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		min-height: 20vh;
		height: 20%;
	}

	.header * {
		width: auto;
		margin-right: 10px;
	}
`;

const StyledPostDetail = styled.div`
	color: var(--dark);
	background-color: var(--background);
	display: flex;
	flex-direction: column;
	text-align: left;
	width: 100vw;
	padding: 30px;

	* {
		margin: 10px auto;
		max-width: var(--lg-container);
		width: 100%;
	}

	* * {
		width: 100%;
	}
`;

function PostDetail(props) {
	const [post, setPost] = useState({});

	useEffect(() => {
		const getPost = async () => {
			const { post_id } = props.match.params;
			const url = `http://localhost:5000/api/post/${post_id}`;
			const data = await getAPI(url);
			setPost(data);
		};

		getPost();
	}, [props.match.params]);

	return (
		<>
			<StyledHeader>
				<div className="header">
					<FontAwesomeIcon icon={faBookOpen} size="2x" />
					<h2>Blog post:</h2>
				</div>
			</StyledHeader>
			<StyledPostDetail>
				<div>
					<h3>{post.title}</h3>
					<p>
						<i>Posted by {post.author}</i>
					</p>
					<p>{post.post}</p>
				</div>
			</StyledPostDetail>
			<CommentForm match={props.match} />
			<CommentList match={props.match} />
		</>
	);
}

export default PostDetail;
