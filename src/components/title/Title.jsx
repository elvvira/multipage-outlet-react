import { StyledTitle2, StyledTitleH1 } from './styled';

const Title = ({ title, main }) => {
	return main ? (
		<StyledTitleH1>{title}</StyledTitleH1>
	) : (
		<StyledTitle2>{title}</StyledTitle2>
	);
};
export default Title;
