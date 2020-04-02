import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
	background-color: var(--primary);
	height: 50px;
	text-align: center;
	color: var(--white);
`;

function Header() {
	return (
		<StyledHeader>
			<p>Blog Away</p>
		</StyledHeader>
	);
}

export default Header;
