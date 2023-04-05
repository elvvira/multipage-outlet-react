import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';
import { IconMenu, StyledHeader } from './styles';

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<StyledHeader>
				<Link to={'/'}>
					<img src='/assets/shared/desktop/logo.svg' alt='' />
				</Link>
				<IconMenu
					onClick={() => setOpen(!open)}
					src={
						open
							? '/assets/shared/mobile/close.svg'
							: '/assets/shared/mobile/menu.svg'
					}
					alt=''
				/>

				<Menu open={open} setOpen={setOpen} />
			</StyledHeader>
		</>
	);
};
export default Header;
