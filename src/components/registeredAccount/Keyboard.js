import styled from 'styled-components';
import { Grid } from '@mui/material/index';
import { faBackspace, faEraser } from '@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index';

const KeyBoardBox = styled.div`
	background-color: #1976d2;
	height: 330px;
	position: fixed;
	bottom: 0;
	width: 100%;
	.MuiGrid-container {
		width: 100%;
		height: 100%;
	}
	.MuiGrid-item {
		align-items: center;
		display: flex;
		justify-content: center;
		height: 25%;
		font-size: 30px;
		color: white;
		cursor: pointer;
		span {
			font-size: 20px;
			margin-top: 5px;
		}
	}
	.all-erase {
		display: flex;
		flex-direction: column;
	}
`;

const KeyBoard = ({
	shuffledArr,
	handleButton,
	handleAllEraser,
	handleEraser,
}) => {
	return (
		<KeyBoardBox>
			<Grid container>
				<Grid item xs={4} onClick={() => handleButton(shuffledArr[0])}>
					{shuffledArr[0]}
				</Grid>
				<Grid item xs={4} onClick={() => handleButton(shuffledArr[1])}>
					{shuffledArr[1]}
				</Grid>
				<Grid item xs={4} onClick={() => handleButton(shuffledArr[2])}>
					{shuffledArr[2]}
				</Grid>
				<Grid item xs={4} onClick={() => handleButton(shuffledArr[3])}>
					{shuffledArr[3]}
				</Grid>
				<Grid item xs={4} onClick={() => handleButton(shuffledArr[4])}>
					{shuffledArr[4]}
				</Grid>
				<Grid item xs={4} onClick={() => handleButton(shuffledArr[5])}>
					{shuffledArr[5]}
				</Grid>
				<Grid item xs={4} onClick={() => handleButton(shuffledArr[6])}>
					{shuffledArr[6]}
				</Grid>
				<Grid item xs={4} onClick={() => handleButton(shuffledArr[7])}>
					{shuffledArr[7]}
				</Grid>
				<Grid item xs={4} onClick={() => handleButton(shuffledArr[8])}>
					{shuffledArr[8]}
				</Grid>
				<Grid item xs={4} className="all-erase" onClick={handleAllEraser}>
					<FontAwesomeIcon icon={faEraser} />
					<span>전체 삭제</span>
				</Grid>
				<Grid item xs={4} onClick={() => handleButton(shuffledArr[9])}>
					{shuffledArr[9]}
				</Grid>
				<Grid item xs={4} onClick={handleEraser}>
					<FontAwesomeIcon icon={faBackspace} />
				</Grid>
			</Grid>
		</KeyBoardBox>
	);
};

export default KeyBoard;
