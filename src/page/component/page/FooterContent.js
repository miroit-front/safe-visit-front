import { useState } from "react";
import TermsOfService from "../../detail/footerContent/TermsOfService";
import PrivacyPolicy from "../../detail/footerContent/PrivacyPolicy";
import Faq from './../../detail/footerContent/Faq';

function FooterContent(){
    const [tab, setTab] = useState(0);
    
    return(
        <div>
                    <div>
                        <nav>
                            <ul className="flex">
                                <li onClick={()=>{setTab(0)}} eventKey="service">
                                    <button>서비스이용약관</button>
                                </li>
                                <li onClick={()=>{setTab(1)}} eventKey="privacy">
                                    <button>개인정보처리방침</button>
                                </li>
                                <li onClick={()=>{setTab(2)}} eventKey="faq">
                                    <button>FAQ</button>
                                </li>
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