import styled from 'styled-components';

const CardContainer = styled.div`
	width: 85%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-bottom: 2rem;
`;

const StyledIcon = styled.div`
	background: #36536b;
	width: 106px;
	height: 106px;
	border-radius: 10rem;
`;
const CardTitle = styled.h3`
	font-size: 18px;
	line-height: 25px;
	letter-spacing: -0.138462px;
	color: #36536b;
`;
const CardInfo = styled.p`
	margin-top: 0;
	font-size: 15px;
	line-height: 25px;
	letter-spacing: -0.115385px;
	color: #6c8294;
`;

export { CardContainer, StyledIcon, CardTitle, CardInfo };
