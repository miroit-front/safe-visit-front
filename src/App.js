import { Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from "./page/MainPage";
import ApplyPage from './page/component/page/ApplyPage';
import SearchPage from './page/component/page/SearchPage';
import NoticePage from './page/component/page/NoticePage';

import Header from './page/component/layout/Header';
import Footer from './page/component/layout/Footer';
import FooterContent from "./page/component/page/FooterContent";
function App() {

  return (
    <div className="App">
       <Header/>

    <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/apply" element={<ApplyPage />}></Route>
        <Route path="/search" element={<SearchPage/>}></Route>
        <Route path="/notice" element={<NoticePage/>}></Route>
        <Route path="/footerContent" element={<FooterContent/>}></Route>
    </Routes>

    <Footer/>

    </div>
  );
}

export default App;
