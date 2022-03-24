import styled from 'styled-components';

/**
 * 충전 메인창 타이틀
 */
const ChargeHeaderBlock = styled.div`
	font-family: 'Noto Sans Serif KR';
	font-size: ${(props) => props.size || '24px'};
	display: flex;
	justify-content: center;
	padding: 15px 0px 10px 0px;
	.nexto {
		width: 460px;
		display: flex;
		align-items: center;
		img {
			width: 45px;
			margin-right: 5px;
		}
	}
`;
const ChargeHeader = ({ text }) => {
	return (
		<ChargeHeaderBlock size="30px">
			<div className="nexto">
				<img src={`${process.env.PUBLIC_URL}/images/capital_3d.png`} />
				<span>{text || '넥토 충전'}</span>
			</div>
		</ChargeHeaderBlock>
	);
};

export default ChargeHeader;
