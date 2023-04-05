import { COLORS } from '../../constants/colors';
import ButtonTransparent from '../button-transparent/ButtonTransparent';
import {
	ContainerPlans,
	Feature,
	StyledPrice,
	StylePriceInfo,
	TitlePrice
} from './styled';

const PricingCard = ({ plan, price, features }) => {
	return (
		<div>
			<TitlePrice>{plan}</TitlePrice>
			<StylePriceInfo>
				Build and test using our core set of products with up to 100 API
				requests{' '}
			</StylePriceInfo>
			<StyledPrice>{price}</StyledPrice>
			<ContainerPlans>
				{features.map(card => {
					return (
						<Feature key={card.id}>
							<img src='public/assets/shared/desktop/icon-check.svg' alt='' />
							<p>{card.name}</p>
						</Feature>
					);
				})}
			</ContainerPlans>
			<ButtonTransparent
				color={COLORS.sanJuanBlue}
				text={'Request Access'}
			></ButtonTransparent>
		</div>
	);
};
export default PricingCard;
