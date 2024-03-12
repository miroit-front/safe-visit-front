import { useState } from 'react';
import InformationStep from '../../detail/InformationStep';
import AgreementStep from './../../detail/AgreementStep';
import CompletionStep from './../../detail/CompletionStep';

function ApplyPage(){
    const [step, setStep] = useState(0);//현재 단계 저장하는 상태
    function nextStep(){
        setStep(step + 1);
    } 
    return(
        <div className='inner'> 
            <h2>방문신청</h2>
            {step === 0 && <AgreementStep onNext={nextStep} setStep={setStep}/>}
            {step === 1 && <InformationStep onNext={nextStep} />}
            {step === 2 && <CompletionStep />}
       </div>
    ) 
}
  
export default ApplyPage;