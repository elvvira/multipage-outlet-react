import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
const { mirageBlue } = COLORS;

const BgImg = styled.img`
	position: absolute;
	top: -600px;
	z-index: 0;
`;
const HomeContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #f2f2f2;
	padding-bottom: 2rem;
`;
const ImgPhone = styled.img`
	width: 200px;
	z-index: 10;
`;
const ContainerMobile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 85%;
	text-align: center;
	margin-right: auto;
	margin-left: auto;
`;
const Input = styled.input`
	width: 90%;
	height: 50px;
	background: #fbfcfe;
	box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
	border-radius: 24px;
	margin-bottom: 10px;
	padding-left: 1rem;
`;

const ContainerWork = styled.div`
	background: ${mirageBlue};
	color: white;
	padding: 2rem;
	text-align: center;
`;
const ImgEasy = styled.img`
	width: 80%;
`;
const ContainerEasy = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 3rem;
`;

export {
	HomeContainer,
	ContainerMobile,
	ImgPhone,
	Input,
	ContainerWork,
	ImgEasy,
	ContainerEasy,
	BgImg
};
