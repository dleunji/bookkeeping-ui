import React from 'react';
import Responsive from '../common/Responsive';
import styled from 'styled-components';
import isFuture from 'date-fns/isFuture';
import {
	TextField,
	TableContainer,
	Table,
	TableCell,
	TableRow,
} from '@mui/material/index';
import { LocalizationProvider, DatePicker } from '@mui/lab/index';
import AdapterDateFns from '@date-io/date-fns';
import DebtorSector from './DebtorSector';
import CreditorSector from './CreditorSector';
import { TableBody } from '@mui/material/index';
const ContentBlock = styled(Responsive)`
	padding-top: 2rem;
	padding-bottom: 2rem;
	flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;

	.MuiGrid-item {
	}
	.MuiFormControl-root {
		width: 20rem;
	}
	.MuiList-root {
		height: 13rem;
		overflow: auto;
    .MuiListItem-root {
      background-color: #f3f6f9;
    }
	}
	.MuiListItemText-root {
		padding-left: 0px;
	}
	.MuiListItemIcon-root {
		min-width: 30px;
	}
	.MuiListItem-root {
		border-radius: 10px;
		margin: 0 0 1rem 0;
	}
	.MuiTableRow-root {
		.MuiTableCell-root {
			&:first-child {
				background-color:  #f3f6f9;
			}
		}
	}
`;

const FinishButton = styled.button`
	border: none;
	border-radius: 4px;
	font-size: 1rem;
	font-family: 'Noto Sans Serif KR';
	padding: 0.8rem 1rem;
	outline: none;
	cursor: pointer;
	color: white;
	background: black;
	margin: 1rem 0.2rem;
`;

const MainEntry = ({
	entry,
	handleCreateEntry,
	handleCreateJournal,
	handleDeleteEntry,
	handleChangeEntry,
	handleChangeEntryDate,
}) => {
	return (
		<ContentBlock>
			<TableContainer>
				<Table>
					<TableBody>
						<TableRow>
							<TableCell
                align="center"
                sx={{
                  width: '4rem'
                }}
              >날짜</TableCell>
							<TableCell>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<DatePicker
										inputFormat="yyyy/MM/dd"
										mask="____/__/__"
										value={entry.entryDate}
										onChange={(date) => handleChangeEntryDate(date)}
										renderInput={(params) => (
											<TextField {...params} size="small" />
										)}
                    showTodayButton={true}
                    showToolBar={true}
										shouldDisableDate={isFuture}

									/>
								</LocalizationProvider>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell
                align="center"
              >적요</TableCell>
							<TableCell>
								<TextField
									value={entry.entrySummary}
									name="entrySummary"
									onChange={handleChangeEntry}
									size="small"
								/>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell
                align="center"
              >차변</TableCell>
							<TableCell>
								<DebtorSector
									entry={entry}
									handleChangeEntry={handleChangeEntry}
									handleCreateEntry={handleCreateEntry}
									handleDeleteEntry={handleDeleteEntry}
								/>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell
                align="center"
              >대변</TableCell>
							<TableCell>
								<CreditorSector
									entry={entry}
									handleChangeEntry={handleChangeEntry}
									handleCreateEntry={handleCreateEntry}
									handleDeleteEntry={handleDeleteEntry}
								/>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<FinishButton onClick={handleCreateJournal}>제출</FinishButton>
		</ContentBlock>
	);
};

export default MainEntry;
