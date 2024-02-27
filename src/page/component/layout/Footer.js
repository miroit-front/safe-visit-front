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
        <div className="footer">
            <ul className="footer-ul">
            <li onClick={()=>{
                setServiceModalState(!serviceModalState);
            }}>서비스 이용약관</li>
                <li onClick={()=>{
                    setAgreementModalState(!agreementModalState);
                }}>개인정보처리방침</li>
                <li>FAQ</li>
            </ul>
            {serviceModalState && <ServiceModal setServiceModalState={setServiceModalState}/>}
            {agreementModalState && <AgreementModal setAgreementModalState={setAgreementModalState} onClose={handleConfirmModal}/>}
        </div>
    )
}

export default Footer;