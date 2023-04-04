import { ContainerInfo, Info, Title } from './styled';

const TitleText = ({ title, info, colorTitle, colorText }) => {
	return (
		<ContainerInfo>
			<Title colorTitle={colorTitle}>{title}</Title>
			<Info colorText={colorText}>{info}</Info>
		</ContainerInfo>
	);
};

export default TitleText;
