import styled from 'styled-components';
const TitlePrice = styled.h3`
	font-family: 'DM Serif Display';
	font-weight: 400;
	font-size: 24px;
	line-height: 32px;
	text-align: center;
	letter-spacing: -0.184615px;
	color: #ba4270;
`;
const StyledPrice = styled.p`
	font-family: 'DM Serif Display';
	font-size: 56px;
	line-height: 72px;
	text-align: center;
	letter-spacing: -0.430769px;
	color: #36536b;
	margin: 0;
`;
const StylePriceInfo = styled.p`
	font-style: italic;
	font-weight: 100;
	font-size: 15px;
	line-height: 28px;
	text-align: center;
	color: #6c8294;
`;
const Feature = styled.div`
	width: 100px;
	display: flex;
	align-items: center;
	font-size: 0.7rem;
	gap: 1rem;
`;

const FeaturesName = styled.p`
	color: ${({ value }) => (value ? 'black' : 'gray')};
	position: relative;
	right: ${({ value }) => (value ? '0px' : '-30px')};
`;
const FeatureImg = styled.img`
	display: ${({ value }) => (value ? 'block' : 'none')};
`;
const ContainerPlans = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 2rem;
	&::after {
		content: '';
		position: absolute;
		width: 90%;
		height: 1px;
		background: #36536b;
		top: 0;
		opacity: 0.25;
	}
	&::before {
		content: '';
		position: absolute;
		width: 90%;
		height: 1px;
		background: #36536b;
		bottom: 0;
		opacity: 0.25;
	}
`;

export {
	ContainerPlans,
	StyledPrice,
	StylePriceInfo,
	TitlePrice,
	Feature,
	FeaturesName,
	FeatureImg
};
