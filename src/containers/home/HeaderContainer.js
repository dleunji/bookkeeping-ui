import React from 'react';
import Header from '../../components/home/Header';
import { changeNavTab } from '../../modules/home';
import { useSelector, useDispatch } from 'react-redux';
import { initEntry } from '../../modules/entry';

const HomeContainer = () => {
	const { user, navTab } = useSelector(({ auth, home }) => ({
		user: auth.currentUser,
		navTab: home.activeNavTab,
	}));

	const dispatch = useDispatch();

	const onChangeNavTab = (navTab) => {
		dispatch(changeNavTab(navTab));
    dispatch(initEntry());
	};

	return (
		<div>
			<Header user={user} onChangeNavTab={onChangeNavTab} navTab={navTab} />
		</div>
	);
};
export default HomeContainer;
