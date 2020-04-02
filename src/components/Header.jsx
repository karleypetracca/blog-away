import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
	background-color: var(--primary);
	color: var(--white);
	height: var(--header-height);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	font-weight: bold;

	* {
		width: var(--lg-container);
	}
`;

function Header() {
	return (
		<StyledHeader>
			<div>
				<p>Blog Away</p>
			</div>
		</StyledHeader>
	);
}

export default Header;
