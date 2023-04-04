import styled from 'styled-components';
const ContainerInfo = styled.div`
	width: 90%;
	margin-right: auto;
	margin-left: auto;
`;

const Title = styled.h2`
	font-family: 'DM Serif Display';
	font-style: normal;
	font-weight: 400;
	font-size: 36px;
	line-height: 36px;
	text-align: center;
	letter-spacing: -0.276923px;
	color: ${({ colorTitle }) => colorTitle};
`;

const Info = styled.p`
	font-family: 'Public Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 28px;

	text-align: center;

	color: ${({ colorText }) => colorText};
`;

export { Title, ContainerInfo, Info };
