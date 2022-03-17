import { LocalizationProvider } from "@mui/lab/index"
import { DatePicker } from "@mui/lab/index";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material/index';
import isFuture from 'date-fns/isFuture';
import ko from 'date-fns/locale/ko';
import styled from 'styled-components';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

const StatisticsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .MuiFormControl-root {
    margin-bottom: 1rem;
  }
  .chart {
    width : 30rem;
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

const StatisticsPanel = ({sum, month, onChangeMonth}) => {
  const data = {
    labels: sum.map(p => categories[p.key]),
    datasets: [
      {
        data: sum.map(p => p.amount),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      }
    ]
  };
  return(
    <StatisticsBlock>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ko}>
				<DatePicker
					inputFormat="yyyy년 MM월"
          views={['year', 'month']}
					value={month}
					onChange={(month) => onChangeMonth(month)}
					renderInput={(params) => <TextField {...params} size="small" />}
					shouldDisableDate={isFuture}
          showTodayButton={true}
          showToolBar={true}
          minDate={new Date('2022-01-01')}
          maxDate={new Date()}
				/>
			</LocalizationProvider>
      {sum.length === 0 && "기록이 없습니다."}
      <div className="chart">
        <Pie
          data={data}
          width={'52px'}
          height={'auto'}
          // options={{ maintainAspectRatio: false }}
        />
      </div>
    </StatisticsBlock>
  );
}

export default StatisticsPanel;