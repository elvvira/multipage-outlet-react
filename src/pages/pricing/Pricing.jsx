import EmailForm from '../../components/email-form/EmailForm';
import Title from '../../components/title/Title';
import { ContainerPricing } from './styled';

import PricingCard from '../../components/pricing-card/PricingCard';
import { PRICING_PLANS } from '../../constants/info';

const Pricing = () => {
	return (
		<ContainerPricing>
			<Title main title={'Pricing'}></Title>
			{Object.keys(PRICING_PLANS).map(card => {
				return (
					<PricingCard
						key={PRICING_PLANS[card].id}
						{...PRICING_PLANS[card]}
					></PricingCard>
				);
			})}

			<div>
				<Title title={'Ready to start?'} />
				<EmailForm></EmailForm>
			</div>
		</ContainerPricing>
	);
};
export default Pricing;
