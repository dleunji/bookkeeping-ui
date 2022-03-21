import { HomePage,
  UserListPage,
  EntryPage,
  JournalPage,
  StatisticsPage,
  InfoPage,
  ChargePage,
  CardPage,
  TermPage,
  ChargeErrorPage
} from './pages/index';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/charge" element={<ChargePage />}/>
        <Route exact path="/users" element={<UserListPage/>} />
        <Route exact path="/entry" element={<EntryPage/>}/>
        <Route exact path="/journal" element={<JournalPage/>}/>
        <Route exact path="/statistics" element={<StatisticsPage/>}/>
        <Route exact path="/info" element={<InfoPage/>}/>
        <Route exact path="/card" element={<CardPage/>}/>
        <Route exact path="/term" element={<TermPage/>}/>
        <Route exact path="/error" element={<ChargeErrorPage/>}/>
      </Routes>
    </>
  );
}

export default App;
