import React from 'react';
import Header from '../../components/home/Header';
import { changeNavTab } from '../../modules/home';
import { useSelector, useDispatch } from 'react-redux';
import { initEntry } from '../../modules/entry';
import { changeTotalPages, changeLatestJournals } from '../../modules/journal';
import { changeUserInfo } from '../../modules/auth';
const JOURNAL_BASE_URL = 'api/Journals/';
const HeaderContainer = () => {
  const { user, navTab, journal } = useSelector(({ auth, home, journal }) => ({
    user: auth.currentUser,
    navTab: home.activeNavTab,
    journal: journal,
  }));

  const dispatch = useDispatch();

  const onChangeNavTab = navTab => {
    dispatch(changeNavTab(navTab));
    dispatch(initEntry());
  };

  const getLatestJournals = () => {
    if (user) {
      try {
        fetch(JOURNAL_BASE_URL + `latest/${user.userId}/${journal.currentPage}`)
          .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw Error(res.status);
            }
          })
          .then(data => {
            console.log(data);
            const { totalRowsCount, totalPages, journals } = data;
            dispatch(changeTotalPages({ totalPages, totalRowsCount }));
            dispatch(changeLatestJournals(journals));
          });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const popup = () => {
    window.open('/charge', '충전', 'width=530,height=770,location=no,status=no,scrollbars=yes');
    // 팝업창에서 사용해야하는 데이터 전달
    // 일정 기간 충전하지 않으면 자동으로 만료되도록 sessionStorage 사용
    // console.log(user.pocketBalance);

    const receiveMessage = e => {
      console.log(e.data);
      if (e.origin !== 'http://localhost:3000') return;
      if (e.type === 'webpackInvalid') return;
      if (typeof e.data === 'object') return;
      getLatestJournals();
      const res = JSON.parse(e.data);
      const { balance } = res;
      console.log(res);
      sessionStorage.setItem('prevBalance', balance);
      // const { state, data } = res;
      // console.log(data);
    };
    window.addEventListener('message', receiveMessage, false);
  };

  return (
    <div>
      <Header user={user} onChangeNavTab={onChangeNavTab} navTab={navTab} popup={popup} />
    </div>
  );
};
export default HeaderContainer;
