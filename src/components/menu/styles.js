import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
const { primary, secondary } = COLORS;

const StyledMenu = styled.nav`
	position: absolute;
	right: 0;
	width: 70%;
	height: 100vh;
	background: ${secondary.mirageBlue};
	top: 0;
	text-align: center;
	color: white;
	transition: transform 0.3s;
	transform: translateX(${({ open }) => (open ? '0' : '100%')});
`;
const Ul = styled.ul`
	position: relative;
	top: 100px;
	height: 300px;
	display: flex;
	gap: 2rem;
	justify-content: center;
	align-items: center;
	font-size: 20px;
`;

export { StyledMenu, Ul };
