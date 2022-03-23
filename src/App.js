import {
  HomePage,
  UserListPage,
  EntryPage,
  JournalPage,
  StatisticsPage,
  InfoPage,
  ChargePage,
  CardPage,
  TermPage,
  ChargeErrorPage,
  PGCardPage,
  OrdinaryPage,
} from './pages/index';
import { Routes, Route } from 'react-router-dom';
import ChargeCompletePage from './pages/ChargeCompletePage';
function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/charge' element={<ChargePage />} />
        <Route exact path='/users' element={<UserListPage />} />
        <Route exact path='/entry' element={<EntryPage />} />
        <Route exact path='/journal' element={<JournalPage />} />
        <Route exact path='/statistics' element={<StatisticsPage />} />
        <Route exact path='/info' element={<InfoPage />} />
        <Route exact path='/card' element={<CardPage />} />
        <Route exact path='/term' element={<TermPage />} />
        <Route exact path='/error' element={<ChargeErrorPage />} />
        <Route exact path='/complete' element={<ChargeCompletePage />} />
        <Route exact path='/pg-card/index' element={<PGCardPage />} />
        <Route exact path='/pg-card/ordinary' element={<OrdinaryPage />} />
      </Routes>
    </>
  );
}

export default App;
