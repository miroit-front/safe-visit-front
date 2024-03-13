import { useState } from "react";
import './AgreementStep.css';

function AgreementStep({onNext,setStep}){
    const [allChk, setAllchk] = useState(false);
    const [chk1, setChk1] = useState(false);
    const [chk2, setChk2] = useState(false);

    function handleAllChkChange(){
        setAllchk(prev => !prev)
        setChk1(true)
        setChk2(true)
    }
    function handleNextBtnChange(){
        if(allChk===true || (chk1===true && chk2===true)){
            onNext();
            
        }else{
            setStep(0);
            alert('약관 동의를 확인해주세요. \n서비스를 이용하기 위해서는 동의가 필요합니다.');
        }
    }
    return(
        <div>
            <section className="agree_progress">
                <div className="progress_wrap">
                    <div>
                        <p className="progress_circle _colored"></p>
                        <p>약관 동의</p>
                    </div>
                    <div>
                        <p className="progress_circle"></p>
                        <p>정보 입력</p>
                    </div>
                    <div>
                        <p className="progress_circle"></p>
                        <p>신청 완료</p>
                    </div>
                </div>
            </section>
            <section className="apply_tit">
                <h3>약관 동의</h3>
                <p>약관 및 개인정보 수집 이용에 동의 해주세요.</p>
                <div className="allagree_check checkbox_wrap">
                    <input id="agree" type="checkbox" checked={allChk} onChange={handleAllChkChange}/>
                    <label for="agree"><span>이용약관 동의(필수) 및 개인정보 수집 이용 동의(필수)에 모두 동의합니다.</span></label>
                </div>
            </section>
            <section className="agree_box">
                <div className="agree_check checkbox_wrap">
                    <input id="chk1" type="checkbox" checked={chk1} onChange={()=>{ setChk1(!chk1)}}/>
                    <label for="chk1"><span>[필수]</span> 서비스이용약관</label>
                </div>
                <div className="policy_box">
                    <h4>제 1장 총칙</h4>
                    <h5>제 1 조 목적</h5>
                    <p>이 이용약관은 (주)대한항공(이하 "대한항공"이라 합니다)이 운영하는 대한항공 온라인 플랫폼에서에서 제공하는 온라인 서비스(이하 "서비스"라 합니다)를
                        이용함에 있어 대한항공과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>

                    <h5>제 2 조 용어의 정의</h5>
                    <p>1. "대한항공 온라인 플랫폼"이란 대한항공이 정보 또는 서비스를 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비와 정보통신망을 이용하여 정보 및 서비스를 이요자에게
                         제공에 함은 당 사이트에 접속하여 이 약관에 따라 당 사이트가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.<br/>
                    2. “e나라 표준인증”에서 제공하는 국가표준, 인증제도, 기술기준, 인증지원 정보를 말합니다.<br/>
                    3. "회원"이라 함은 서비스를 이용하기 위하여 당 사이트에 개인정보를 제공하여 아이디(ID)와 비밀번호를 부여 받은 자를 말합니다.<br/>
                    4. “비회원”이하 함은 회원으로 가입하지 않고 " e나라 표준인증"에서 제공하는 서비스를 이용하는 자를 말합니다.<br/>
                    5. "회원 아이디(ID)"라 함은 회원의 식별 및 서비스 이용을 위하여 자신이 선정한 문자 및 숫자의 조합을 말합니다.<br/>
                    6. "비밀번호"라 함은 회원이 자신의 개인정보 및 직접 작성한 비공개 콘텐츠의 보호를 위하여 선정한 문자, 숫자 및 특수문자의 조합을 말합니다.</p>

                    <h5>제 3 조 (이용약관의 효력 및 변경)</h5>
                    <p>1. 당 사이트는 이 약관의 내용을 회원이 알 수 있도록 당 사이트의 초기 서비스화면에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.<br/>
                    2. 당 사이트는 이 약관을 개정할 경우에 적용일자 및 개정사유를 명시하여 현행 약관과 함께 당 사이트의 초기화면 또는 초기화면과의 연결화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 
                    다만, 회원에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 당 사이트는 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.<br/>
                    3. 당 사이트가 전항에 따라 개정약관을 공지하면서 “개정일자 적용 이전까지 회원이 명시적으로 거부의 의사표시를 하지 않는 경우 회원이 개정약관에 동의한 것으로 봅니다. ”라는 취지를 명확하게 공지하였음에도 회원이 명시적으로 거부의 의사표시를 하지 않은 경우에는 개정약관에 동의한 것으로 봅니다. 회원이 개정약관에 동의하지 않는 경우 당 사이트 이용계약을 해지할 수 있습니다.
                    </p>
                </div>
            </section>
            <section className="agree_box">
                <div className="agree_check checkbox_wrap">
                    <input id="chk2" type="checkbox" checked={chk2} onChange={()=>{setChk2(!chk2)}}/>
                    <label for="chk2"><span>[필수]</span> 개인정보처리방침</label>
                </div>
                <div className="policy_box">
                    <h4>제 1장 총칙</h4>
                    <h5>제1조 개인정보처리방침의 의의</h5>
                    <p>본 개인정보처리방침은 (주)대한항공(이하"대한항공")의 개인정보 주체와 관련된 개인정보 처리 및 보호와 정보통신망 안전성확보에 대하여 규정하고 있습니다.
                    고객 가입의사 확인, 고객에 대한 서비스 제공에 따른 본인 식별.인증, 회원자격 유지.관리, 물품 또는 서비스 공급에 따른 금액 결제, 물품 또는 서비스의 공급.배송 등</p>
                    <h5>제 2 조 용어의 정의</h5>
                    <p>1. "대한항공 온라인 플랫폼"이란 대한항공이 정보 또는 서비스를 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비와 정보통신망을 이용하여 정보 및 서비스를 이요자에게
                         제공에 함은 당 사이트에 접속하여 이 약관에 따라 당 사이트가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.<br/>
                    2. “e나라 표준인증”에서 제공하는 국가표준, 인증제도, 기술기준, 인증지원 정보를 말합니다.<br/>
                    3. "회원"이라 함은 서비스를 이용하기 위하여 당 사이트에 개인정보를 제공하여 아이디(ID)와 비밀번호를 부여 받은 자를 말합니다.<br/>
                    4. “비회원”이하 함은 회원으로 가입하지 않고 " e나라 표준인증"에서 제공하는 서비스를 이용하는 자를 말합니다.<br/>
                    5. "회원 아이디(ID)"라 함은 회원의 식별 및 서비스 이용을 위하여 자신이 선정한 문자 및 숫자의 조합을 말합니다.<br/>
                    6. "비밀번호"라 함은 회원이 자신의 개인정보 및 직접 작성한 비공개 콘텐츠의 보호를 위하여 선정한 문자, 숫자 및 특수문자의 조합을 말합니다.</p>
                    <h5>제 3 조 (이용약관의 효력 및 변경)</h5>
                    <p>1. 당 사이트는 이 약관의 내용을 회원이 알 수 있도록 당 사이트의 초기 서비스화면에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.<br/>
                    2. 당 사이트는 이 약관을 개정할 경우에 적용일자 및 개정사유를 명시하여 현행 약관과 함께 당 사이트의 초기화면 또는 초기화면과의 연결화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 
                    다만, 회원에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 당 사이트는 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.<br/>
                    3. 당 사이트가 전항에 따라 개정약관을 공지하면서 “개정일자 적용 이전까지 회원이 명시적으로 거부의 의사표시를 하지 않는 경우 회원이 개정약관에 동의한 것으로 봅니다. ”라는 취지를 명확하게 공지하였음에도 회원이 명시적으로 거부의 의사표시를 하지 않은 경우에는 개정약관에 동의한 것으로 봅니다. 회원이 개정약관에 동의하지 않는 경우 당 사이트 이용계약을 해지할 수 있습니다.
                    </p>
                    <p>서비스를 이용하기 위해서는 동의가 필요합니다.</p>
                </div>
            </section>
            <div className="center_btn"><button  onClick={handleNextBtnChange} className="btn_blue">다음</button></div>
        </div>
    )
}
export default AgreementStep;