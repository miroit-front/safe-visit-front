import { Routes, Route } from "react-router-dom";
import './App.css';

import MainPage from "./page/MainPage";
import ApplyPage from './page/component/page/ApplyPage';
import SearchPage from './page/component/page/SearchPage';
import NoticePage from './page/component/page/NoticePage';
import Header from './page/component/layout/Header';
import Footer from './page/component/layout/Footer';
import TermsOfService from './page/detail/footerContent/TermsOfService';
import PrivacyPolicy from './page/detail/footerContent/PrivacyPolicy';
import Faq from './page/detail/footerContent/Faq';
import InformationStep from './page/detail/InformationStep';
import CompletionStep from "./page/detail/CompletionStep";
import NoticeProvider from "./page/component/page/NoticeProvider";
import NoticeListModal from "./page/detail/modal/NoticeListModal";

function App() {
  return (
    <NoticeProvider>
        <div className="App">
          <NoticeListModal/>
            <Header/>
              <Routes>
                  <Route path="/" element={<MainPage />}></Route>
                  <Route path="/apply" element={<ApplyPage />}></Route>
                  <Route path="/search" element={<SearchPage/>}></Route>
                  <Route path="/notice" element={<NoticePage/>}></Route>
                  <Route path="/termOfService" element={<TermsOfService/>}></Route>
                  <Route path="/privacyPolicy" element={<PrivacyPolicy/>}></Route>
                  <Route path="/faq" element={<Faq/>}></Route>
                  <Route path="/informaion-step" element={<InformationStep/>}></Route>
                  <Route path="/completion-step" element={<CompletionStep/>}></Route>
              </Routes>

          <Footer/>

        </div>
    </NoticeProvider>
  );
}

export default App;
