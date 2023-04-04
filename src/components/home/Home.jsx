import TitleBig from '../../title-big/TitleBig';
import ButtonTransparent from '../button-transparent/ButtonTransparent';
import EmailForm from '../email-form/EmailForm';
import Logos from '../logos/Logos';

import TitleText from '../title-text/TitleText';
import {
	ContainerEasy,
	ContainerMobile,
	ContainerWork,
	HomeContainer,
	ImgEasy,
	ImgPhone
} from './styled';

const Home = () => {
	return (
		<HomeContainer>
			<ContainerMobile>
				<ImgPhone
					src='public/assets/home/desktop/illustration-phone-mockup.svg'
					alt=''
				/>
				<div>
					<TitleBig
						title={'Start building with our APIs for absolutely free.'}
					/>

					<EmailForm></EmailForm>
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

					<ButtonTransparent text={'About Us'} />
				</div>
			</ContainerWork>
			<ContainerEasy>
				<ImgEasy
					src='public/assets/home/desktop/illustration-easy-to-implement.svg'
					alt=''
				/>
				<TitleText
					colorTitle={'#36536b'}
					colorText={' #6c8294'}
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
					colorTitle={'#36536b'}
					colorText={' #6c8294'}
					title={'Simple UI & UX'}
					info={
						'Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. '
					}
				/>
			</ContainerEasy>

			<div>
				<TitleBig title={'Ready to start?'}></TitleBig>
				<EmailForm></EmailForm>
			</div>
		</HomeContainer>
	);
};
export default Home;
