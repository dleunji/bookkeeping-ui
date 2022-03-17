import React from 'react';
import MainEntry from '../entry/MainEntry';
import MainJournal from '../journal/MainJournal';
import MainStatistics from '../statistics/MainStatistics';
import MainInfo from '../info/MainInfo';

const LoggedInContent = ({
	navTab,
	journal,
	handleCreateEntry,
	handleDeleteEntry,
	handleChangeEntry,
	handleChangeEntryDate,
	handleCreateJournal,
	entry,
	onChangeTab,
	handleChangeJournalDate,
	// searchDailyJournals,
	onChangePage,
  handleDeleteJournal,
  statistics,
  onChangeMonth,
  onChangeStatisticsTab,
  user
}) => {
	switch (navTab) {
		case 0:
			return (
				<MainJournal
					journal={journal}
					onChangeTab={onChangeTab}
					handleChangeJournalDate={handleChangeJournalDate}
					// searchDailyJournals={searchDailyJournals}
          handleDeleteJournal={handleDeleteJournal}
					onChangePage={onChangePage}
				/>
			);
		case 1:
			return (
				<MainEntry
					handleCreateEntry={handleCreateEntry}
					handleDeleteEntry={handleDeleteEntry}
					handleChangeEntry={handleChangeEntry}
					handleChangeEntryDate={handleChangeEntryDate}
					entry={entry}
					handleCreateJournal={handleCreateJournal}
				/>
			);
		case 2:
			return(
        <MainStatistics
          statistics={statistics}
          onChangeMonth={onChangeMonth}
          onChangeStatisticsTab={onChangeStatisticsTab}
        />
      );
    case 3:
      return(
        <MainInfo
          user={user}
        />
      );
	}
};

export default LoggedInContent;
