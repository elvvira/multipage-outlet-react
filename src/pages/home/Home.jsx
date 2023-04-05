import { CardHomeInfo } from '../../constants/info';
import Title from '../../components/title/Title';
import ButtonTransparent from '../../components/button-transparent/ButtonTransparent';
import CardHome from '../../components/cards-home/CardHome';
import EmailForm from '../../components/email-form/EmailForm';
import Logos from '../../components/logos/Logos';

import TitleText from '../../components/title-text/TitleText';
import {
	BgImg,
	ContainerEasy,
	ContainerMobile,
	ContainerWork,
	HomeContainer,
	ImgEasy,
	ImgPhone
} from './styled';

import { COLORS } from '../../constants/colors';

const Home = () => {
	return (
		<HomeContainer>
			<BgImg src='public/assets/shared/desktop/bg-pattern-circle.svg' alt='' />
			<ContainerMobile>
				<ImgPhone
					src='public/assets/home/desktop/illustration-phone-mockup.svg'
					alt=''
				/>
				<div>
					<Title
						main
						title={'Start building with our APIs for absolutely free.'}
					/>

					<EmailForm />
					<p>Have any questions? Contact Us</p>
				</div>
			</ContainerMobile>
			<ContainerWork>
				<Logos />
				<div>
					<TitleText
						colorTitle={'white'}
						colorText={'white'}
						title={'Who we work with'}
						info={
							'Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.'
						}
					/>

					<ButtonTransparent color={'white'} text={'About Us'} />
				</div>
			</ContainerWork>
			<ContainerEasy>
				<ImgEasy
					src='public/assets/home/desktop/illustration-easy-to-implement.svg'
					alt=''
				/>
				<TitleText
					colorTitle={COLORS.sanJuanBlue}
					colorText={COLORS.lightSanJuanBlue}
					title={'Easy to implement'}
					info={
						'Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.'
					}
				/>
			</ContainerEasy>
			<ContainerEasy>
				<ImgEasy
					src='public/assets/home/desktop/illustration-simple-ui.svg'
					alt=''
				/>
				<TitleText
					colorTitle={COLORS.sanJuanBlue}
					colorText={COLORS.lightSanJuanBlue}
					title={'Simple UI & UX'}
					info={
						'Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. '
					}
				/>
			</ContainerEasy>

			{CardHomeInfo.map(card => {
				return <CardHome key={card.id} {...card}></CardHome>;
			})}

			<div>
				<Title title={'Ready to start?'} />
				<EmailForm></EmailForm>
			</div>
		</HomeContainer>
	);
};
export default Home;
