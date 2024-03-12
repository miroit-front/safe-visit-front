import { useState } from "react";
import './FooterContent.css';
import TermsOfService from "../../detail/footerContent/TermsOfService";
import PrivacyPolicy from "../../detail/footerContent/PrivacyPolicy";
import Faq from './../../detail/footerContent/Faq';

function FooterContent(){
    const [tab, setTab] = useState(0);
    
    return(
        <div className="inner">
            <div>
                 <nav>
                    <ul className="ftcon_tab">
                        <li onClick={()=>{setTab(0)}} eventKey="service">서비스이용약관</li>
                        <li onClick={()=>{setTab(1)}} eventKey="privacy">개인정보처리방침</li>
                        <li onClick={()=>{setTab(2)}} eventKey="faq">FAQ</li>
                     </ul>
                 </nav>
            </div>
            {tab === 0 && <TermsOfService />}
            {tab === 1 && <PrivacyPolicy />}
            {tab === 2 && <Faq />}
        </div>
    )
}

export default FooterContent;