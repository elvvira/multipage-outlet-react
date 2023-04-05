import { Link } from 'react-router-dom';
import ButtonPink from '../button-pink/ButtonPink';
import { StyledMenu, Ul } from './styles';

const Menu = ({ open, setOpen }) => {
	return (
		<StyledMenu open={open}>
			<Ul>
				<li>
					<Link to='/pricing'>Pricing</Link>
				</li>
				<li>
					<Link to=''>About</Link>
				</li>
				<li>
					<Link to=''>Contact</Link>
				</li>
				<ButtonPink />
			</Ul>
		</StyledMenu>
	);
};
export default Menu;
