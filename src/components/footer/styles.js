import styled from 'styled-components';
const StyledFooter = styled.div`
	background: #1b262f;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	padding: 2rem;
`;
const Nav = styled.nav`
	color: white;
`;

const Ul = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const Icons = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;
export { StyledFooter, Nav, Icons, Ul };
