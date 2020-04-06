import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.div`
	color: var(--primary);
	text-align: left;
	margin: 10px auto;
	max-width: var(--sm-container);
	width: 100vw;
	padding: 30px;
	background-color: var(--background);
	border-radius: 4px;

	h3 {
		margin-bottom: 10px;
	}

	p {
		color: var(--dark);
		margin: 10px auto;
		font-size: 1.2rem;
	}

	form {
		display: flex;
		flex-direction: column;
	}

	input {
		padding: 5px;
		margin: 5px;
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

function UserSignup() {
	const [email, setEmail] = useState("");
	const [author, setAuthor] = useState("");
	const [password, setPassword] = useState("");

	return (
		<StyledForm>
			<h3>Signup</h3>
			<p>Please enter your details below:</p>
			<form>
				<input type="text" value="" placeholder="Email" />
				<input type="text" value="" placeholder="Username" />
				<input type="text" value="" placeholder="Password" />
				<button type="submit">Submit</button>
			</form>
		</StyledForm>
	);
}

export default UserSignup;
