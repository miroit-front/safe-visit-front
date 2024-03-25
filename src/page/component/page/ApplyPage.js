import React, { useState } from 'react';
import AgreementStep from './../../detail/AgreementStep';
import CompletionStep from './../../detail/CompletionStep';
import InformationStep from '../../detail/InformationStep';

function ApplyPage(){

    /*AgreementStep*/
    const [step, setStep] = useState(0); //현재 단계 저장하는 상태
    const [allChk, setAllchk] = React.useState(false); //모두체크
    const [chk1, setChk1] = React.useState(false); //1번항목 체크
    const [chk2, setChk2] = React.useState(false); //2번항목 체크
    const[personalInfoConsent, setPersonalInfoConsent] = useState(''); // 개인정보 체크 상태

    const handlePersonalInfoConsentChange = (e) => {//개인정보 체크되면 'Y', 아니면 빈 문자열로 설정
        setPersonalInfoConsent(e.target.checked ? 'Y' : '');
    } 


    function nextStep(){//다음 단계로 넘어가는 함수
        setStep(step + 1);
    }  

    return(
        <div className='inner'> 
            <h2>방문신청</h2>
            <section className="agree_progress">
                <div className="progress_wrap">
                    <div>
                        <p className={step === 0 ? 'progress_circle _colored' : step > 0 ? 'progress_circle _completed' : 'progress_circle'}></p>
                        <p>약관 동의</p>
                    </div>
                    <div>
                        <p className={step === 1 ? 'progress_circle _colored' : step > 1 ? 'progress_circle _completed' : 'progress_circle'}></p>
                        <p>정보 입력</p>
                    </div>
                    <div>
                        <p className={step === 2 ? 'progress_circle _colored' : step > 2 ? 'progress_circle _completed' : 'progress_circle'}></p>
                        <p>신청 완료</p>
                    </div>
                </div>
            </section>
            {step === 0 && <AgreementStep onNext={nextStep} setStep={setStep} allChk={allChk} setAllchk={setAllchk} 
            chk1={chk1} setChk1={setChk1} chk2={chk2} setChk2={setChk2} personalInfoConsent={personalInfoConsent}
            setPersonalInfoConsent={setPersonalInfoConsent}/>}
            {step === 1 && <InformationStep onNext={nextStep} personalInfoConsent={personalInfoConsent} />}
            {step === 2 && <CompletionStep />}
        </div>

    ) 
}
  
export default ApplyPage;