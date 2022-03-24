import styled from 'styled-components';
import { Grid } from '../../../node_modules/@mui/material/index';

const StyledAddressBox = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	align-items: center;
	font-size: 18px;
	.bank-name {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
// TODO: 계좌 선택 기능 추가
const AccountAddress = () => {
	return (
		<StyledAddressBox>
			<Grid container>
				<Grid item xs={3} className="bank-name">
					우리
				</Grid>
				<Grid item xs={9} className="account-address">
					1002556597228
				</Grid>
			</Grid>
		</StyledAddressBox>
	);
};

export default AccountAddress;
