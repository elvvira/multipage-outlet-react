import { Icons, Nav, StyledFooter, Ul } from './styles';

const Footer = () => {
	return (
		<StyledFooter>
			<img src='/assets/shared/desktop/logo-white.svg' alt='' />
			<Nav>
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
				</Ul>
			</Nav>
			<Icons>
				<img src='/assets/shared/desktop/facebook.svg' alt='' />
				<img src='/assets/shared/desktop/twitter.svg' alt='' />
				<img src='/assets/shared/desktop/linkedin.svg' alt='' />
			</Icons>
		</StyledFooter>
	);
};

export default Footer;
