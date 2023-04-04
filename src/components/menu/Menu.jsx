import ButtonPink from '../button-pink/ButtonPink';
import { StyledMenu, Ul } from './styles';

const Menu = ({ open, setOpen }) => {
	return (
		<StyledMenu open={open}>
			<Ul>
				<li>
					<a href=''>Pricing</a>
				</li>
				<li>
					<a href=''>About</a>
				</li>
				<li>
					<a href=''>Contact</a>
				</li>
				<ButtonPink />
			</Ul>
		</StyledMenu>
	);
};
export default Menu;
