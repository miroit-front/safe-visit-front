import React, { useState } from 'react';
import InformationStep from '../../detail/InformationStep';
import AgreementStep from './../../detail/AgreementStep';
import CompletionStep from './../../detail/CompletionStep';

function ApplyPage(){
    const [step, setStep] = useState(0);//현재 단계 저장하는 상태
    const [allChk, setAllchk] = React.useState(false);
    const [chk1, setChk1] = React.useState(false);
    const [chk2, setChk2] = React.useState(false);

    function nextStep(){//다음 단계로 넘어가는 함수
        setStep(step + 1);
    }  

    return(
        <div className='inner'> 
            <h2>방문신청</h2>
            <section className="agree_progress">
                <div className="progress_wrap">
                    <div>
                        <p className={step===0 ? 'progress_circle _colored' : 'progress_circle'}></p>
                        <p>약관 동의</p>
                    </div>
                    <div>
                        <p className={step===1 ? 'progress_circle _colored' : 'progress_circle'}></p>
                        <p>정보 입력</p>
                    </div>
                    <div>
                        <p className={step===2 ? 'progress_circle _colored' : 'progress_circle'}></p>
                        <p>신청 완료</p>
                    </div>
                </div>
            </section>
            {step === 0 && <AgreementStep onNext={nextStep} setStep={setStep} allChk={allChk} setAllchk={setAllchk} 
            chk1={chk1} setChk1={setChk1} chk2={chk2} setChk2={setChk2}/>}
            {step === 1 && <InformationStep onNext={nextStep} />}
            {step === 2 && <CompletionStep />}
       </div>
    ) 
}
  
export default ApplyPage;