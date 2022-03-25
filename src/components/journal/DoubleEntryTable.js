import React from 'react';
import styled from 'styled-components';

import {
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Table,
	Paper,
	TableContainer,
} from '@mui/material/index';
import {
	faArrowUp,
	faArrowDown,
} from '@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index';
import { IconButton, Toolbar, Tooltip } from '@mui/material/index';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import SvgIcon from '@mui/material/SvgIcon';
import PropTypes from 'prop-types';
import { faTrashCan } from '../../../node_modules/@fortawesome/free-solid-svg-icons/index';
import Pagination from '@mui/material/Pagination';

const TableBlock = styled.div`
	width: 100%;
	height: 40rem;
	border-radius: 9px;
	table {
		border-collapse: collapse;
		th {
			background-color: #f3f6f9;
			font-weight: 700;
		}
		.plus {
			margin-left: 0.5rem;
			color: red;
		}
		.minus {
			margin-left: 0.5rem;
			color: blue;
		}
	}
	.inner-cell {
		padding: 0;
		tr {
			&:last-child {
				td {
					border-bottom: none;
				}
			}
		}
	}
	.delete-icon {
		cursor: pointer;
	}
	.pagination {
		margin-top: 1rem;
		display: flex;
		justify-content: center;
	}
`;
const categories = {
	1001: '현금',
	1002: '예금',
	1003: '넥토머니',
	1004: '상품권',
	1005: '연결 계좌',
	2001: '카드 대금',
	2002: '휴대폰 대금',
	2003: '후불 결제 대금',
	3001: '용돈',
	3002: '급여',
	3003: '이자 수익',
	4001: '식비',
	4002: '교통',
	4003: '주거',
	4004: '통신',
	4005: '취미, 여가',
	4006: '쇼핑',
	4007: '생활',
	4008: '여행, 숙박',
	4009: '교육',
	4010: '술, 유흥',
	4011: '의료, 건강, 피트니스',
	4012: '편의점, 마트, 잡화',
	4013: '기부, 후원',
	4014: '기타',
};
const upperColumns = ['일자', '적요', '차변', '우변', '메모', '삭제'];

const FontAwesomeSvgIcon = React.forwardRef((props, ref) => {
	const { icon } = props;

	const {
		icon: [width, height, , , svgPathData],
	} = icon;

	return (
		<SvgIcon ref={ref} viewBox={`0 0 ${width} ${height}`}>
			{typeof svgPathData === 'string' ? (
				<path d={svgPathData} />
			) : (
				svgPathData.map((d, i) => (
					<path style={{ opacity: i === 0 ? 0.4 : 1 }} d={d} />
				))
			)}
		</SvgIcon>
	);
});

FontAwesomeSvgIcon.propTypes = {
	icon: PropTypes.any.isRequired,
};

const DoubleEntryTable = ({
	journal,
	onChangePage,
	totalPages,
	handleDeleteJournal,
}) => {
	const debitorTotalAmount = journal.reduce((acc, j) => {
		const amount = j.elements.reduce((acc, e) => {
			if (
				e.categoryId > 4000 ||
				(e.categoryId < 2000 && e.sign > 0) ||
				(e.categoryId > 2000 && e.categoryId < 3000 && e.sign < 0)
			)
				return acc + parseInt(e.amount);
			else return acc;
		}, 0);
		return acc + amount;
	}, 0);
	const creditorTotalAmount = journal.reduce((acc, j) => {
		const amount = j.elements.reduce((acc, e) => {
			if (
				(e.categoryId > 3000 && e.categoryId < 4000) ||
				(e.categoryId < 2000 && e.sign < 0) ||
				(e.categoryId > 2000 && e.categoryId < 3000 && e.sign > 0)
			) {
				return acc + parseInt(e.amount);
			} else return acc;
		}, 0);
		return acc + amount;
	}, 0);

	return (
		<TableBlock>
			{/* TODO: 단기부기/복식부기 */}
			{/* TODO: 눈모양으로 아이콘 변경 */}
			{/* TODO: 코드 리팩토링 */}

			<TableContainer component={Paper}>
				<Toolbar
					sx={{
						pl: { sm: 2 },
						pr: { xs: 1, sm: 1 },
						bgcolor: '#f3f6f9',
						flex: '1 1 100%',
						justifyContent: 'right',
					}}
				>
					<Tooltip title="보기 옵션">
						<IconButton>
							<FontAwesomeSvgIcon icon={faEllipsisV} />
						</IconButton>
					</Tooltip>
				</Toolbar>
				<Table>
					<TableHead>
						{/* 옵션 */}

						<TableRow>
							{upperColumns.map((column, idx) => (
								<TableCell
									align="center"
									key={idx}
									colSpan={idx === 2 || idx === 3 ? 2 : 1}
								>
									{column}
								</TableCell>
							))}
						</TableRow>
						<TableRow>
							<TableCell align="center" colSpan={2}></TableCell>
							<TableCell align="center" sx={{ width: '10rem' }}>
								계정
							</TableCell>
							<TableCell align="center" sx={{ width: '8rem' }}>
								금액
							</TableCell>
							<TableCell align="center" sx={{ width: '10rem' }}>
								계정
							</TableCell>
							<TableCell align="center" sx={{ width: '8rem' }}>
								금액
							</TableCell>
							<TableCell align="center"></TableCell>
							<TableCell align="center"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{journal?.map((j, idx) => (
							<TableRow
								key={idx}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell align="center">
									{j.transactedAt.substr(0, 10)}
								</TableCell>
								<TableCell align="center">{j.summary}</TableCell>
								<TableCell align="center" className="inner-cell" colSpan={2}>
									<Table>
										<TableBody>
											{j.elements.map(
												(e, idx) =>
													(e.categoryId > 4000 ||
														(e.categoryId < 2000 && e.sign > 0) ||
														(e.categoryId > 2000 &&
															e.categoryId < 3000 &&
															e.sign < 0)) && (
														<TableRow key={idx}>
															<TableCell
																align="center"
																sx={{
																	width: '10rem',
																}}
															>
																{categories[e.categoryId]}
																{e.sign === -1 ? (
																	<FontAwesomeIcon
																		className="minus"
																		icon={faArrowDown}
																	/>
																) : e.sign === 1 ? (
																	<FontAwesomeIcon
																		className="plus"
																		icon={faArrowUp}
																	/>
																) : (
																	''
																)}
															</TableCell>
															<TableCell align="center" sx={{ width: '8rem' }}>
																{e.amount.toLocaleString()}
															</TableCell>
														</TableRow>
													)
											)}
										</TableBody>
									</Table>
								</TableCell>
								<TableCell className="inner-cell" colSpan={2}>
									<Table>
										<TableBody>
											{j.elements.map(
												(e, idx) =>
													((e.categoryId > 3000 && e.categoryId < 4000) ||
														(e.categoryId < 2000 && e.sign < 0) ||
														(e.categoryId > 2000 &&
															e.categoryId < 3000 &&
															e.sign > 0)) && (
														<TableRow key={idx}>
															<TableCell
																align="center"
																sx={{
																	width: '10rem',
																}}
															>
																{categories[e.categoryId]}
																{e.sign === -1 ? (
																	<FontAwesomeIcon
																		className="minus"
																		icon={faArrowDown}
																	/>
																) : e.sign === 1 ? (
																	<FontAwesomeIcon
																		className="plus"
																		icon={faArrowUp}
																	/>
																) : (
																	''
																)}
															</TableCell>
															<TableCell align="center" sx={{ width: '8rem' }}>
																{e.amount.toLocaleString()}
															</TableCell>
														</TableRow>
													)
											)}
										</TableBody>
									</Table>
								</TableCell>
								<TableCell align="center">{j.memo}</TableCell>
								<TableCell align="center">
									<FontAwesomeIcon
										className="delete-icon"
										icon={faTrashCan}
										onClick={() => handleDeleteJournal(j.journalId)}
									/>
								</TableCell>
							</TableRow>
						))}
						<TableRow>
							<TableCell colSpan={2} />
							<TableCell align="center">합계</TableCell>
							<TableCell align="center">
								{debitorTotalAmount.toLocaleString()}
							</TableCell>
							<TableCell align="center">합계</TableCell>
							<TableCell align="center">
								{creditorTotalAmount.toLocaleString()}
							</TableCell>
							<TableCell></TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<div className="pagination">
				<Pagination
					count={totalPages}
					color="primary"
					onChange={onChangePage}
				/>
			</div>
		</TableBlock>
	);
};

export default DoubleEntryTable;
