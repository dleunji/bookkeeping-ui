import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import MainStatistics from "../components/statistics/MainStatistics";
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
import { changeMonth, changeStatisticsTab, changeSum } from '../modules/statistics';
const ELEMENT_BASE_URL = 'api/Elements/';

const StatisticsContainer = () => {
  const { user, statistics } = useSelector(({ auth, statistics }) => ({
			user: auth.currentUser,
			statistics: statistics,
		})
	);
  
  const dispatch = useDispatch();
	const getStatistics = async () => {
		if (user) {
			const { userId } = user;
			const year = getYear(statistics.month);
			const month = getMonth(statistics.month) + 1;
			try {
				await fetch(ELEMENT_BASE_URL + `${userId}/${year}/${month}`)
					.then((res) => {
						if (res.ok) {
							return res.json();
						} else {
							throw new Error(res.status);
						}
					})
					.then((data) => {
						dispatch(changeSum(data));
					});
			} catch (e) {
				console.log(e);
			}
		}
	};

	const onChangeStatisticsTab = (e, tab) => {
		dispatch(changeStatisticsTab(tab));
	};

	const onChangeMonth = (month) => {
		dispatch(changeMonth(month));
	};

  useEffect(() => {
		if (statistics.month !== null) {
			getStatistics();
		}
	}, [statistics.month]);

	useEffect(() => {
		dispatch(changeMonth(new Date()));
	}, [statistics.tab]);

  return (
    <MainStatistics
      statistics={statistics}
      onChangeMonth={onChangeMonth}
      onChangeStatisticsTab={onChangeStatisticsTab}
    />
  );
}

export default StatisticsContainer;