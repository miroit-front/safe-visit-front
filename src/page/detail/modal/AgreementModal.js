import './AgreementModal.css'
import { useState } from 'react';

function AgreementModal(props){
    const [isChecked, setIschecked] = useState(false);

    const handleConfirm = ()=>{
        console.log(props);
        if(isChecked===true){
            props.setIsOpen(false);
            console.log('확인')
            props.onClose();
        }else{
            alert('동의버튼을 눌러야 합니다')
        }
    }

    const toggleModal = () => {
        props.setIsOpen(!props.isOpen);
    }
    const handleCheckboxChange = (e) => {
        console.log(e.target.checked);
        setIschecked(!isChecked);
    }
    
    return(
        <div className={`agreeModal ${props.isOpen ? 'open' : ''}`}>
            <header><span>개인정보처리방침</span><button onClick={toggleModal}>X</button></header>
            <main>
                <section className='post-header'>
                    <div className='post-header-1'>
                        <h3>개인정보처리방침</h3>
                        <p>대한항공 방문 예약 시스템은 개인정보보호법률을 준수하고 있습니다.</p>
                    </div>
                    <select className='post-header2'>
                        <option>개인정보처리방침 2023.10.31</option>
                    </select>
                </section>
                <section className='post'>
                    대충 어쩌고 저쩌고 내용 들어감
                </section>
            </main>
                <footer>
                    <section>
                        <input type='checkbox' id='agree' name='agree' value='agree' defaultChecked={isChecked}
                        onChange={handleCheckboxChange}/>
                        <p>방문자에게 개인정보 처리방침 및 수집/취득/활용 동의를 득 하였음</p>
                    </section>
                    <button type='submit' onClick={handleConfirm}>확인</button>
                </footer>
        </div>
    )

}

export default AgreementModal;