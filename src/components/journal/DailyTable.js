import styled from 'styled-components';
import { LocalizationProvider, DatePicker } from '@mui/lab/index';
import DoubleEntryTable from './DoubleEntryTable';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material/index';
import isFuture from 'date-fns/isFuture';
import ko from 'date-fns/locale/ko';

const DailyBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	.MuiFormControl-root {
		margin-bottom: 1rem;
	}
`;
const SearchButton = styled.button`
	border: none;
	border-radius: 4px;
	font-size: 1rem;
	font-family: 'Noto Sans Serif KR';
	padding: 0.5rem 1rem;
	outline: none;
	cursor: pointer;
	color: white;
	background: gray;
	margin-left: 1rem;
	&:active {
		background: #1976d2;
	}
`;
const DailyTable = ({
	journal,
	handleChangeJournalDate,
	onChangePage,
	totalPages,
	handleDeleteJournal,
}) => {
	return (
		<DailyBlock>
			<LocalizationProvider dateAdapter={AdapterDateFns} locale={ko}>
				<DatePicker
					inputFormat="yyyy/MM/dd"
					mask="____/__/__"
					value={journal.journalDate}
					onChange={(date) => handleChangeJournalDate(date)}
					renderInput={(params) => <TextField {...params} size="small" />}
					shouldDisableDate={isFuture}
					showTodayButton={true}
					showToolBar={true}
				/>
			</LocalizationProvider>
			<DoubleEntryTable
				journal={journal.dailyJournals}
				onChangePage={onChangePage}
				totalPages={totalPages}
				handleDeleteJournal={handleDeleteJournal}
			/>
		</DailyBlock>
	);
};

export default DailyTable;
