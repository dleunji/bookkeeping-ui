import React from "react";
import styled from "styled-components";
import {
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Table,
	Paper,
  TableContainer
} from '@mui/material/index';
import {
	faArrowUp,
	faArrowDown,
} from '@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index';
import {
	IconButton,
	Toolbar,
	Tooltip,
} from '@mui/material/index';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import SvgIcon from '@mui/material/SvgIcon';
import PropTypes from 'prop-types';
import { faTrashCan } from '../../../node_modules/@fortawesome/free-solid-svg-icons/index';
import Pagination from '@mui/material/Pagination';
// 일별 통계
const ContentBlock = styled.div`
  padding: 3rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // .MuiPaper-root {
  //   width: 80%;
  // }
  table {
		border-collapse: collapse;
		th {
			background-color: #f3f6f9;
			font-weight: 700;
		}
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
	2001: '카드 대금',
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
const upperColumns = ['일자', '적요', '차변 금액', '우변 금액', '메모'];
const MainStatistics = ({statistics, onChangeSPage}) => {
  return(
    <ContentBlock>
      <TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							{upperColumns.map((column, idx) => (
								<TableCell
									align="center"
									key={idx}
								>
									{column}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{statistics.elements?.map((e, idx) => (
							<TableRow
								key={idx}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell align="center">
									{e.transactedAt.substr(0, 10)}
								</TableCell>
								<TableCell align="center">{e.summary}</TableCell>
								<TableCell align="center" className="inner-cell">
									{(e.categoryId > 4000 ||
										(e.categoryId < 2000 && e.sign > 0) ||
										(e.categoryId > 2000 &&
										e.categoryId < 3000 &&
										e.sign < 0)) && (
										e.amount.toLocaleString()
									)}
								</TableCell>
								<TableCell align="center" className="inner-cell">
                  {(e.categoryId > 3000 && e.categoryId < 4000) ||
                    (e.categoryId < 2000 && e.sign < 0) ||
                    (e.categoryId > 2000 &&
                      e.categoryId < 3000 &&
                      e.sign > 0) && (
                      e.amount.toLocaleString()
                  )}
								</TableCell>
								<TableCell align="center"></TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
      <div className="pagination">
        <Pagination
          count ={statistics.totalPages}
          color="primary"
          onChange={onChangeSPage}
        />
      </div>
    </ContentBlock>
  );
}

export default MainStatistics;