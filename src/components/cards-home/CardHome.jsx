import { CardContainer, CardInfo, CardTitle, StyledIcon } from './styled';

const CardHome = ({ title, info, src }) => {
	return (
		<CardContainer>
			<StyledIcon>
				<img src={src} alt='' />
			</StyledIcon>
			<CardTitle>{title}</CardTitle>
			<CardInfo>{info}</CardInfo>
		</CardContainer>
	);
};
export default CardHome;
