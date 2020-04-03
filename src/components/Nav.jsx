import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const StyledNav = styled.nav`
	background-color: var(--primary);
	color: var(--white);
	height: var(--header-height);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	font-weight: bold;
	position: sticky;
	top: 0;
	width: 100vw;

	.nav {
		width: 100%;
		max-width: var(--lg-container);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.leftNav {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.leftNav * {
		margin-left: 5px;
		margin-right: 5px;
	}

	.rightNav {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.rightNav button {
		margin-left: 5px;
		margin-right: 5px;
		background-color: var(--secondary);
		border-style: none;
		padding: 0 10px;
		height: var(--header-height);
		font-size: 1rem;
		font-weight: bold;
	}

	.rightNav button:hover {
		cursor: pointer;
		transition-duration: 0.3s;
		background-color: var(--dark-secondary);
	}
`;

function Header() {
	return (
		<StyledNav>
			<div className="nav">
				<div className="leftNav">
					<a href="/">
						<FontAwesomeIcon icon={faBookOpen} size="2x" />
					</a>
					<p>
						<a href="/">Blog Away</a>
					</p>
				</div>
				<div className="rightNav">
					<a href="/postnew">
						<button>Post a Blog!</button>
					</a>
				</div>
			</div>
		</StyledNav>
	);
}

export default Header;
