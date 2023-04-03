import styled from 'styled-components';

const StyledMenu = styled.nav`
	position: absolute;
	right: 0;
	width: 70%;
	height: 100vh;
	background: pink;
	top: 0;
	text-align: center;
	color: white;
	transition: transform 0.3s;
	transform: translateX(${({ open }) => (open ? '0' : '100%')});
`;
const Ul = styled.ul``;

export { StyledMenu, Ul };
