import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab } from '@mui/material/index';
import StatisticsPanel from './StatisticsPanel';
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
const ContentBlock = styled.div`
  padding: 3rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}
TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const MainStatistics = ({statistics, onChangeStatisticsTab, onChangeMonth}) => {
  return (
    <ContentBlock>
      <Box sx={{ width: '100%' }}>
				<Box sw={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={statistics.tab} onChange={onChangeStatisticsTab}>
						<Tab label="수익" {...a11yProps(0)} />
						<Tab label="비용" {...a11yProps(1)} />
					</Tabs>
				</Box>
        <TabPanel value={statistics.tab} index={0}>
          <StatisticsPanel
            sum={statistics.sum.filter(s => s.key > 3000 && s.key < 4000)}
            month={statistics.month}
            onChangeMonth={onChangeMonth}
          />
				</TabPanel>
        <TabPanel value={statistics.tab} index={1}>
        <StatisticsPanel
            sum={statistics.sum.filter(s => s.key > 4000)}
            month={statistics.month}
            onChangeMonth={onChangeMonth}
          />
				</TabPanel>
      </Box>
    </ContentBlock>
  );
}

export default MainStatistics;
