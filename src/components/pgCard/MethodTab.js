import styled from 'styled-components';
import { Grid } from '@mui/material/index';
import MethodBox from './MethodBox';
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index';
import { faAddressCard } from '../../../node_modules/@fortawesome/free-solid-svg-icons/index';
const TabBlock = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: center;
	.tab-container {
		width: 80%;
		border-radius: 6px;
		border-right: 1px solid #c5c5c5;
		border-left: 1px solid #c5c5c5;
		border-bottom: 1px solid #c5c5c5;
		.tab-box {
			cursor: pointer;
			background-color: #c5c5c5;
			font-weight: 600;
			display: flex;
			justify-content: center;
			align-items: center;
			&.left {
				border-radius: 6px 0px 0px 0px;
			}
			&.right {
				border-radius: 0px 6px 0px 0px;
			}
			&.active {
				cursor: default;
				color: white;
				background-color: #1976d2;
			}
			height: 60px;
		}
	}
	.inner-container {
		display: flex;
		justify-content: center;
		width: 100%;
		.method-boxes {
			height: 250px;
			margin-top: 10px;
			display: flex;
			justify-content: center;
			width: 100%;
		}
	}
	.no-card {
		display: flex;
		align-items: center;
		font-size: 18px;
		.card-icon {
			margin-right: 15px;
			font-size: 40px;
		}
	}
	.card-icon {
		font-size: 40px;
	}
`;
const MethodTab = ({ activeTab, handleTab }) => {
	return (
		<TabBlock>
			<Grid container className="tab-container">
				<Grid
					item
					xs={6}
					className={`tab-box left ${activeTab === 0 ? 'active' : ''}`}
					onClick={() => handleTab(0)}
				>
					앱 이용 O
				</Grid>
				<Grid
					item
					xs={6}
					className={`tab-box right ${activeTab === 1 ? 'active' : ''}`}
					onClick={() => handleTab(1)}
				>
					앱 이용 X
				</Grid>
				<div className="inner-container">
					<div className="method-boxes">
						{activeTab === 0 ? (
							<MethodBox />
						) : (
							<MethodBox>
								<div className="no-card">
									<FontAwesomeIcon className="card-icon" icon={faAddressCard} />
									일반결제(카드번호 + CVC번호)
								</div>
							</MethodBox>
						)}
					</div>
				</div>
			</Grid>
		</TabBlock>
	);
};

export default MethodTab;