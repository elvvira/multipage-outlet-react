import styled from 'styled-components';

const StyledButtonTransparent = styled.button`
	color: ${({ color }) => color};
	width: 50%;
	height: 50px;
	border: 1px solid ${({ color }) => color};
	border-radius: 24px;
	font-weight: 600;
	margin-bottom: 2rem;
`;
export { StyledButtonTransparent };
