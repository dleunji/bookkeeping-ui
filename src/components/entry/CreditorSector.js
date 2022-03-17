import React from 'react';
import {
	Grid,
	IconButton,
	TextField,
	FormControl,
	Select,
	MenuItem,
	InputLabel,
	TableRow,
	TableCell,
	TableBody,
	Table,
	ListItem,
	ListItemText,
	ListItemIcon,
	List,
} from '@mui/material/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import {
	faArrowRight,
	faTrashCan,
	faPlus,
	faMinus,
} from '../../../node_modules/@fortawesome/free-solid-svg-icons/index';
const creditorAccount = ['자산의 감소', '부채의 증가', '수익의 발생'];
const creditorCategory = [
	[
		{
			categoryId: 1001,
			categoryName: '현금',
		},
		{
			categoryId: 1002,
			categoryName: '예금',
		},
	],
	[
		{
			categoryId: 2001,
			categoryName: '카드 대금',
		}
	],
	[
		{
			categoryId: 3001,
			categoryName: '용돈',
		},
		{
			categoryId: 3002,
			categoryName: '급여',
		},
		{
			categoryId: 3003,
			categoryName: '이자 수익',
		},
	],
];

const CreditorSector = ({
	entry,
	handleChangeEntry,
	handleCreateEntry,
	handleDeleteEntry,
}) => {
	return (
		<Grid container>
			<Grid item xs={5}>
				<Table>
					<TableBody>
						<TableRow>
							<TableCell>계정</TableCell>
							<TableCell>
								<FormControl fullWidth>
									<InputLabel id="select-active-creditor-account">
										계정
									</InputLabel>
									<Select
										labelId="select-active-creditor-account"
										value={entry.activeCreditorAccount}
										label="계정"
										name="activeCreditorAccount"
										onChange={handleChangeEntry}
										// sx={{ width: '100%' }}
									>
										{creditorAccount.map((credt, idx) => (
											<MenuItem value={idx} key={idx}>
												{credt}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>과목</TableCell>
							<TableCell>
								<FormControl fullWidth disabled={entry.activeCreditorAccount === ''}>
									<InputLabel id="select-active-creditor-account-title">
										과목
									</InputLabel>
									<Select
										labelId="select-active-creditor-account-title"
										value={entry.activeCreditorAccountTitle}
										label="계정"
										name="activeCreditorAccountTitle"
										onChange={handleChangeEntry}
									>
										{Number.isInteger(entry.activeCreditorAccount) &&
											creditorCategory[entry.activeCreditorAccount].map(
												(cat, idx) => (
													<MenuItem value={cat.categoryId} key={idx}>
														{cat.categoryName}
													</MenuItem>
												)
											)}
									</Select>
								</FormControl>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>금액</TableCell>
							<TableCell>
								<FormControl>
									<TextField
										id="select-active-creditor-account-amount"
										name="creditorAccountAmount"
										type="number"
										value={entry.creditorAccountAmount}
										onChange={handleChangeEntry}
									/>
								</FormControl>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Grid>
			<Grid
				item
				xs={2}
				sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
			>
				<div>
					<IconButton
						onClick={() =>
							handleCreateEntry('creditors', {
								amount: entry.creditorAccountAmount,
								accountId: entry.activeCreditorAccount,
								categoryId: entry.activeCreditorAccountTitle,
							})
						}
					>
						<FontAwesomeIcon icon={faArrowRight} color={'#1976d2'} />
					</IconButton>
				</div>
			</Grid>
			<Grid item xs={5}>
				<List>
					{entry.creditors.map((credt, idx) => (
						<ListItem key={idx}>
							<ListItemIcon>
								{credt.sign === 1 ? (
									<FontAwesomeIcon icon={faPlus} />
								) : credt.sign === -1 ? (
									<FontAwesomeIcon icon={faMinus} />
								) : (
									''
								)}
							</ListItemIcon>
							<ListItemText
								inset
								primary={
									creditorCategory[credt.accountId].find(
										(cat) => cat.categoryId === credt.categoryId
									).categoryName + `  ${parseInt(credt.amount).toLocaleString()}`
								}
							/>
							<IconButton
								edge="end"
								aria-label="delete"
								onClick={() => handleDeleteEntry('creditors', idx)}
							>
								<FontAwesomeIcon icon={faTrashCan} className="delete-icon" />
							</IconButton>
						</ListItem>
					))}
				</List>
			</Grid>
		</Grid>
	);
};

export default CreditorSector;
