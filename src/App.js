import './App.css';
import {HomePage, UserListPage, EntryPage, JournalPage, StatisticsPage} from './pages/index';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route exact path="/users" element={<UserListPage/>} />
        <Route exact path="/entry" element={<EntryPage/>}/>
        <Route exact path="/journal" element={<JournalPage/>}/>
        <Route exact path="/statistics" element={<StatisticsPage/>}/>
      </Routes>
    </>
  );
}

export default App;
