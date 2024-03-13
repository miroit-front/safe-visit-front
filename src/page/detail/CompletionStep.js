import './CompletionStep.css';

function CompletionStep(){
    return(
        <div>
            <section className="agree_progress">
                <div className="progress_wrap">
                    <div>
                        <p className="progress_circle"></p>
                        <p>약관 동의</p>
                    </div>
                    <div>
                        <p className="progress_circle"></p>
                        <p>정보 입력</p>
                    </div>
                    <div>
                        <p className="progress_circle _colored"></p>
                        <p>신청 완료</p>
                    </div>
                </div>
            </section>
            <section className='completecon_wrap'>
                <div className='complete_con01'>
                    <ul>
                        <li className='complete_tit'>방문신청이 완료되었습니다.</li>
                        <li><span>승인이 완료되면</span> 방문 신청이 최종 완료됩니다.<br />
                        신청내역과 승인 상황은 <span className='go_search' onClick={(e)=>{window.location.href='/search'}}>방문신청 조회 페이지</span>에서 확인하실 수 있습니다.</li>
                    </ul>
                </div>
                <div className='complete_con02'>
                    <div className='visit_caution'>방문 시 필요 사항</div>
                    <ul>
                        <li>방문 시 먼저 <span>초소 안내센터</span>로 방문해주세요.</li>
                        <li>매일 06시 QR코드가 폐기됩니다.  (* 1개월간 폐기 유예)</li>
                    </ul>
                </div>
            </section>
            <div className="center_btn"><button  onClick={(e)=>{window.location.href = '/'}} className="btn_blue">확인</button></div>
        </div>
    )
}
export default CompletionStep;