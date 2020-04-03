import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const StyledHeader = styled.nav`
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

	.nav {
		width: 100%;
		max-width: var(--lg-container);
	}

	.leftNav {
		display: flex;
		align-items: center;
		margin: 0 auto;
	}

	.leftNav * {
		margin-left: 5px;
		margin-right: 5px;
	}
`;

function Header() {
	return (
		<StyledHeader>
			<div className="nav">
				<div className="leftNav">
					<a href="/">
						<FontAwesomeIcon icon={faBookOpen} size="2x" />
					</a>
					<p>
						<a href="/">Blog Away</a>
					</p>
				</div>
			</div>
		</StyledHeader>
	);
}

export default Header;
