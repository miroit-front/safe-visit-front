import React, { useState } from 'react';
import TabLayout from "../../component/layout/TabLayout";

function Faq() {
    // 각각의 아코디언 패널에 대한 내용을 상태로 관리합니다.
    const [panels, setPanels] = useState([
        { question: '단체로 방문신청 예약을 하고 싶어요.', answer: (<div>
            방문신청시 방문객 추가 버튼을 눌러 인원을 추가할 수 있습니다.<br/>
            추가 인원의 정보도 기입해야합니다.<br/><br/>
            인원이 10명 이상일시,<br/>
            양식 엑셀 파일을 다운로드받아 작성 후 업로드해주세요.<br/>
            (엑셀 업로드시, 대표 1인 정보만 기입합니다.)
        </div>), isOpen: false },
        { question: '자주하는 질문 02', answer: '자주하는 질문 답변', isOpen: false },
        { question: '자주하는 질문 03', answer: '자주하는 질문 답변', isOpen: false },
        { question: '자주하는 질문 04', answer: '자주하는 질문 답변', isOpen: false }
    ]);

     // question_box를 클릭하여 패널을 열거나 닫는 핸들러 함수입니다.
     const handleQuestionBoxClick = (index) => {
        setPanels(prevPanels => {
            const newPanels = [...prevPanels];
            newPanels[index] = { ...newPanels[index], isOpen: !newPanels[index].isOpen }; // 해당 패널의 isOpen 상태를 토글합니다.
            return newPanels;
        });
    };
    

    return (
        <div className="inner">
            <TabLayout />
            <div className="footercon_tit">
                <h3>FAQ</h3>
                <p>무엇을 도와드릴까요? 자주하는 질문 페이지를 통해 궁금증을 해결하세요.</p>
            </div>
            <div className="faqcon_wrap">
                {panels.map((panel, index) => (
                    <div key={index} className='faqcon_box'>
                        <div className="question_box" onClick={() => handleQuestionBoxClick(index)}>
                            <ul>
                                <h4>Q</h4>
                                <li>{panel.question}</li>
                            </ul>
                            <span className={`faq_button ${panel.isOpen ? 'open' : 'close'}`}></span>
                        </div>
                        <div className={`answer_box ${panel.isOpen ? 'open' : ''}`}>
                            <ul>
                                <h4>A</h4>
                                <li>{panel.answer}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;
