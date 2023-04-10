import { COLORS } from '../../constants/colors';
import ButtonTransparent from '../button-transparent/ButtonTransparent';
import {
	ContainerPlans,
	Feature,
	FeatureImg,
	FeaturesName,
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
							<FeatureImg
								value={card.value}
								src='public/assets/shared/desktop/icon-check.svg'
								alt=''
							/>
							<FeaturesName value={card.value}>{card.name}</FeaturesName>
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
