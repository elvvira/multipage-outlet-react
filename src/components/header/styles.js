import styled from 'styled-components';
// @media screen and (min-width: 768px)

const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	padding: 2rem;
	position: relative;
	background: #f2f2f2;
	justify-content: space-between;
`;
const IconMenu = styled.img`
	z-index: 1000;
`;
export { StyledHeader, IconMenu };
