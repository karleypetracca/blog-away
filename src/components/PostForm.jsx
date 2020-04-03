import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { postAPI } from "../utilities/postAPI";

function PostForm(props) {
	const [title, setTitle] = useState("");
	const [post, setPost] = useState("");
	const [author_id, setAuthor] = useState(0);

	return (
		<div>
			<p>Hey there</p>
		</div>
	);
}

export default PostForm;
