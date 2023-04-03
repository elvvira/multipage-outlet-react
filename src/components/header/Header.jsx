import { useState } from 'react';
import Menu from '../menu/Menu';
import { IconMenu, StyledHeader } from './styles';

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<StyledHeader>
				<img src='/assets/shared/desktop/logo.svg' alt='' />
				<IconMenu
					onClick={() => setOpen(!open)}
					src='/assets/shared/mobile/menu.svg'
					alt=''
				/>

				<Menu open={open} setOpen={setOpen} />
			</StyledHeader>
		</>
	);
};
export default Header;
