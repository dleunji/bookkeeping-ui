import styled from 'styled-components';
import { Grid } from '../../../node_modules/@mui/material/index';

const StyledAddressBox = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	align-items: center;
	font-size: 18px;
	.password-name {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.warning {
		font-size: 14px;
		color: #ff0000;
		visibility: hidden;
		&.visible {
			visibility: visible;
		}
	}
`;

const StyledPasswordInput = styled.input`
	border: none;
	font-size: 50px;
	width: 200px;
	color: #c4c4c4;
	letter-spacing: 2px;
	&:focus {
		outline: none;
	}
`;

const AccountPassword = ({ password, wrong }) => {
	return (
		<StyledAddressBox>
			<Grid container>
				<Grid item xs={3} className="password-name">
					암호
				</Grid>
				<Grid item xs={9} className="account-address">
					<StyledPasswordInput type="password" value={password} readOnly />
					<div className={`warning ${wrong ? 'visible' : ''}`}>
						비밀번호를 확인하세요
					</div>
				</Grid>
			</Grid>
		</StyledAddressBox>
	);
};

export default AccountPassword;
