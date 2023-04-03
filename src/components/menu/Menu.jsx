import { Ul } from '../footer/styles';
import { StyledMenu } from './styles';

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
				<button>Schedule a Demo</button>
			</Ul>
		</StyledMenu>
	);
};
export default Menu;
