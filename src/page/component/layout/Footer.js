import './Footer.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    const [tab, setTab] = useState(null);
    const handleTabClick = (tabNum) =>{
        setTab(tabNum);
    }

    return(
        <div id="footer">
            <div className='ft_wrap'>
                <ul className="footer-ul">
                    <li><Link to="/termOfService" onClick={()=>handleTabClick(0)}>서비스 이용약관</Link></li>
                    <li className='ft_privacy'><Link to="/privacyPolicy" onClick={()=>handleTabClick(1)}>개인정보처리방침</Link></li>
                    <li><Link to="/faq" onClick={()=>handleTabClick(2)}>FAQ</Link></li>
                </ul>
                <p>COPYRIGHT©2024 KOREAN AIR. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    )
}

export default Footer;
