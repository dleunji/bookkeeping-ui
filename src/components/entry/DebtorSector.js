import React from 'react';
import {
	Grid,
	IconButton,
	TextField,
	TableRow,
	TableBody,
	Table,
	TableCell,
	FormControl,
	Select,
	MenuItem,
	InputLabel,
	ListItem,
	ListItemText,
	List,
} from '@mui/material/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import {
	faTrashCan,
	faArrowRight,
} from '@fortawesome/free-solid-svg-icons/index';
import { ListItemIcon } from '@mui/material/index';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons/index';
const debtorAccount = ['자산의 증가', '부채의 감소', '비용의 발생'];
/**
 * 1000대: 자산
 * 2000대: 부채
 * 3000대: 수익
 * 4000대: 비용
 */
const debtorCategory = [
	[
		{
			categoryId: 1001,
			categoryName: '현금',
		},
		{
			categoryId: 1002,
			categoryName: '예금',
		},
		{
			categoryId: 1003,
			categoryName: '넥토머니',
		},
		{
			categoryId: 1004,
			categoryName: '상품권',
		},
		{
			categoryId: 1005,
			categoryName: '연결 계좌',
		},
	],
	[
		{
			categoryId: 2001,
			categoryName: '카드 대금',
		},
		{
			categoryId: 2002,
			categoryName: '휴대폰 대금',
		},
		{
			categoryId: 2003,
			categoryName: '후불결제 대금',
		},
	],
	[
		{
			categoryId: 4001,
			categoryName: '식비',
		},
		{
			categoryId: 4002,
			categoryName: '교통',
		},
		{
			categoryId: 4003,
			categoryName: '주거',
		},
		{
			categoryId: 4004,
			categoryName: '통신',
		},
		{
			categoryId: 4005,
			categoryName: '취미, 여가',
		},
		{
			categoryId: 4006,
			categoryName: '쇼핑',
		},
		{
			categoryId: 4007,
			categoryName: '생활',
		},
		{
			categoryId: 4008,
			categoryName: '여행, 숙박',
		},
		{
			categoryId: 4009,
			categoryName: '교육',
		},
		{
			categoryId: 4010,
			categoryName: '술, 유흥',
		},
		{
			categoryId: 4011,
			categoryName: '의료, 건강, 피트니스',
		},
		{
			categoryId: 4012,
			categoryName: '편의점, 마트, 잡화',
		},
		{
			categoryId: 4013,
			categoryName: '기부, 후원',
		},
		{
			categoryId: 4014,
			categoryName: '기타',
		},
	],
];

const DebtorSector = ({
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
									<InputLabel id="select-active-debtor-account">
										계정
									</InputLabel>
									<Select
										labelId="select-active-debtor-account"
										value={entry.activeDebtorAccount}
										label="계정"
										name="activeDebtorAccount"
										onChange={handleChangeEntry}
										sx={{ width: '100%' }}
									>
										{debtorAccount.map((debt, idx) => (
											<MenuItem value={idx} key={idx}>
												{debt}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>과목</TableCell>
							<TableCell>
								<FormControl fullWidth disabled={entry.activeDebtorAccount === ''}>
									<InputLabel id="select-active-debtor-account-title">
										과목
									</InputLabel>
									<Select
										labelId="select-active-debtor-account-title"
										value={entry.activeDebtorAccountTitle}
										label="계정"
										name="activeDebtorAccountTitle"
										onChange={handleChangeEntry}
									>
										{Number.isInteger(entry.activeDebtorAccount) &&
											debtorCategory[entry.activeDebtorAccount].map(
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
										id="select-active-debtor-account-amount"
										name="debtorAccountAmount"
										type="number"
										value={entry.debtorAccountAmount}
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
				<IconButton
					onClick={() =>
						handleCreateEntry('debtors', {
							amount: entry.debtorAccountAmount,
							accountId: entry.activeDebtorAccount,
							categoryId: entry.activeDebtorAccountTitle,
						})
					}
				>
					<FontAwesomeIcon icon={faArrowRight} color={'#1976d2'} />
				</IconButton>
			</Grid>
			<Grid item xs={5}>
				<List>
					{entry.debtors.map((debt, idx) => (
						<ListItem key={idx}>
							<ListItemIcon>
								{debt.sign === 1 ? (
									<FontAwesomeIcon icon={faPlus} />
								) : debt.sign === -1 ? (
									<FontAwesomeIcon icon={faMinus} />
								) : (
									''
								)}
							</ListItemIcon>
							<ListItemText
								inset
								primary={
									debtorCategory[debt.accountId].find(
										(cat) => cat.categoryId === debt.categoryId
									).categoryName + `  ${parseInt(debt.amount).toLocaleString()}`
								}
							/>
							<IconButton
								edge="end"
								aria-label="delete"
								onClick={() => handleDeleteEntry('debtors', idx)}
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

export default DebtorSector;
