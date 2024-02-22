import { Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from "./page/MainPage";
import ApplyPage from './page/component/page/ApplyPage';
import SearchPage from './page/component/page/SearchPage';
import NoticePage from './page/component/page/NoticePage';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/apply" element={<ApplyPage />}></Route>
        <Route path="/search" element={<SearchPage/>}></Route>
        <Route path="/notice" element={<NoticePage/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
