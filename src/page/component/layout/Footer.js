import './Footer.css';
import ServiceModal from './../../detail/modal/ServiceModal';
import { useState } from 'react';
import AgreementModal from './../../detail/modal/AgreementModal';

function Footer(){
    const [serviceModalState, setServiceModalState] = useState(false);
    const [agreementModalState, setAgreementModalState] = useState(false);

    const handleConfirmModal = () => {
        setServiceModalState(false);
        setAgreementModalState(false);
    };
    return(
        <div id="footer">
            <div className='ft_wrap'>
                <ul className="footer-ul">
                    <li onClick={()=>{setServiceModalState(!serviceModalState);}}>서비스 이용약관</li>
                    <li className='ft_privacy' onClick={()=>{setAgreementModalState(!agreementModalState);}}>개인정보처리방침</li>
                    <li>FAQ</li>
                </ul>
                <p>COPYRIGHT©2024 KOREAN AIR. ALL RIGHTS RESERVED.</p>
            </div>
            {serviceModalState && <ServiceModal setServiceModalState={setServiceModalState}/>}
            {agreementModalState && <AgreementModal setAgreementModalState={setAgreementModalState} onClose={handleConfirmModal}/>}
        </div>
    )
}

export default Footer;