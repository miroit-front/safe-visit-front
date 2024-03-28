import { useState } from 'react';
import './Search.css';
import axios from 'axios';
import SearchDetailModal from './modal/SearchDetailModal';


function Search(){
    const [detailData, setDetailData] = useState([]);
    const [checkedNationality , setCheckedNationality] = useState('내국인');
    const [name, setName] = useState(''); //방문조회 이름
    const [phoneNumber, setPhoneNumber] = useState(''); //방문조회 폰번호
    const [showModal, setShowModal] = useState(false);

    const handleShowModal=()=>{ 
        setShowModal(true);
        document.body.style.overflow = "hidden";
    }
    const handleNameChange=(event) => {
        setName(event.target.value);
    }
    const handlePhoneNumberChange=(event) => {
        setPhoneNumber(event.target.value);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault(); // 폼 제출 방지
        searchRes(); // 검색 함수 호출
    }
    function checkOneNationality(e){
        const checkedNationality = document.getElementsByName('nationality');
        Array.prototype.forEach.call(checkedNationality, function(item){
            item.checked = false;
        });
        e.target.checked = true;
        setCheckedNationality(e.target.value);
    }
    
    /*api로 데이터 받아오는 함수 */
    async function searchRes() {
         // 이름과 전화번호가 모두 비어 있을 경우 경고 메시지를 표시하고 함수 실행을 중단합니다.
         //trim() 사용해서 사용자가 공백만 입력해도 경고메세지 표시
        if (!name.trim() && !phoneNumber.trim()) {
            alert('신청자 정보를 입력해주세요.');
            return; // 함수 실행을 여기서 중단합니다.
        }

        const apiUrl_search = `/reservation/get-list?name=${name}&phoneNumber=${phoneNumber}&page=0&size=20`;
        console.log("apiUrl_search : ",apiUrl_search);

        axios.get(apiUrl_search) //get방식으로 보내서
        .then(res=>{ //답변res받음
            console.log(res);
            console.log(res.data.content);

            const newData = res.data.content.map(data=>({ //res의 data안에 content를 반복문에 돌리고 newData라는 객체에 담음
                reservationCode: data.reservationCode,
                createDt: data.createDt,
                companyName: data.companyName,
                visitorName: data.visitorName,
                visitStartDt: data.visitStartDt,
                escortEmployeeTeam: data.escortEmployeeTeam,
                escortEmployeeName: data.escortEmployeeName,
                proceedingCode: data.proceedingCode,
                parkingApproval: data.parkingApproval
            }));
            setDetailData(newData); //setDetailData에 newData를 저장
        }).catch(err => {
            if (err.response && err.response.data && err.response.data.info === null) {
                alert('신청자 정보를 입력해주세요.');
            } else {
                console.error('API 호출 에러:', err.response ? err.response.data.info : 'Unknown Error');
                alert('데이터를 가져오는 중 오류가 발생했습니다.');
            }
        });
        
    }
    
    return(
        <form action="#" onSubmit={handleFormSubmit}>
            {showModal && (<SearchDetailModal setShowModal={setShowModal} detailData={detailData}/>)} {/*showModal이 true */}
            <section className='apply-info'>
                <h5>신청자 정보</h5>
                <ul>
                    <li>
                        <label name='name'>방문자 이름</label>
                        <input type='text'value={name} onChange={handleNameChange} placeholder="이름을 입력해주세요" title='이름을 입력해주세요' className='input_basic'/>
                        <div className='nationality radio_bl'>
                            <input type="radio" id="domestic" name="nationality" value="내국인" 
                            onChange={(e)=>checkOneNationality(e)} checked={checkedNationality==='내국인'}/><label for="domestic">내국인</label>
                            <input type="radio" id="foreigner" name="nationality" value="외국인" 
                            onChange={(e)=>checkOneNationality(e)} checked={checkedNationality==='외국인'}/><label for="foreigner">외국인</label>
                        </div>
                    </li>
                    <li>
                        <label name='phoneNumber'>방문신청번호</label>
                        <input type='number' value={phoneNumber} onChange={handlePhoneNumberChange} placeholder="숫자만 입력해주세요" title='숫자만 입력해주세요' className='input_basic'/>
                        * 방문신청 시 입력한 핸드폰 번호를 입력해주세요.
                    </li>
                </ul>
                <div className="center_btn"><button type='submit' className="btn_blue">조회</button></div>
            </section>
            <section className='search-info'>
                <h5>조회 결과</h5>
                <section className='search-part'>
                    <div className="basic_table">
                            <div className="table-row table-header">
                                <div className="tb_num">No</div>
                                <div>신청일자</div>
                                <div className="tb_company">회사명</div>
                                <div className="tb_name">이름</div>
                                <div>방문일자</div>
                                <div className="tb_escort">임직원 정보</div>
                                <div className="tb_partner">접견자 정보</div>
                                <div className="tb_status">방문</div>
                                <div className="tb_parking">주차</div>
                            </div>
                            {/* <div className='table-body'>
                                <div className="table-row" onClick={handleShowModal}>
                                    <div className="table-cell tb_num">00</div>
                                    <div className="table-cell tb_date">2024.00.00</div>
                                    <div className="table-cell tb_team">미로아이티</div>
                                    <div className="table-cell tb_name">김미로</div>
                                    <div className="table-cell tb_visitdate">2024.00.00 00:00</div>
                                    <div className="table-cell tb_escort">기획팀 / 김대한</div>
                                    <div className="table-cell tb_status tag_done">승인완료</div>
                                    <div className="table-cell tb_parking tag_parkingnum"><span>8</span>/10</div>
                                </div>
                            </div>
                            <div className='table-body'>
                                <div className="table-row" onClick={handleShowModal}>
                                    <div className="table-cell tb_num">00</div>
                                    <div className="table-cell tb_date">2024.00.00</div>
                                    <div className="table-cell tb_team">미로아이티</div>
                                    <div className="table-cell tb_name">김미로</div>
                                    <div className="table-cell tb_visitdate">2024.00.00 00:00</div>
                                    <div className="table-cell tb_escort">기획팀 / 김대한</div>
                                    <div className="table-cell tb_status tag_first">1차승인</div> 2차승인 tag_second / 승인대기 tag_wait / 반려 tag_reject 
                                    <div className="table-cell tb_parking tag_parkingnum _done"><span>10</span>/10</div>
                                </div>
                            </div> */}
                            {detailData.map((data, i)=>(
                            <div className='table-body' onClick={handleShowModal}>
                                <div className="table-row" key={i}>
                                    <div style={{display:'none'}}>{data.reservationCode}</div>
                                    <div className="tb_num">{i+1}</div>
                                    <div>{data.createDt}</div>
                                    <div className="tb_company">{data.companyName}</div>
                                    <div>{data.visitorName}</div>
                                    <div>{data.visitStartDt}</div>
                                    <div className="tb_escort">{data.escortEmployeeTeam}<br />{data.escortEmployeeName}</div>
                                    <div className="tb_partner">대한항공협력사<br />김협력</div>
                                    <div className="tb_status">{data.proceedingCode}</div>
                                    <div className="tb_parking">{data.parkingApproval}</div>
                                </div>
                            </div>
                             ))}
                    </div>
                </section>

                <nav className='pagination_wrap'>
                    <div className='prev_btn_wrap'>
                        <ul>
                            <li><a href='#' className='btn_prev_faster' title='맨 앞으로 이동'></a></li>
                            <li><a href='#' className='btn_prev' title='이전 페이지'></a></li>
                        </ul>
                    </div>
                    <div className='num_wrap'>
                    <ul className='num_list'>
                        <li className='page_num'><a href='.' className='pagination clicked'>1</a></li>
                        <li className='page_num'><a href='.' className='pagination active'>2</a></li>
                        <li className='page_num'><a href='.' className='pagination'>3</a></li>
                    </ul>
                </div>
                    <div className='next_btn_wrap'>
                        <ul>
                            <li><a href='#' className='btn_next' title='다음 페이지'></a></li>
                            <li><a href='#' className='btn_next_faster' title='맨 뒤로 이동'></a></li>
                        </ul>
                    </div>
                </nav>
                
            </section>
            <div className="center_btn"><button onClick={(e)=>{window.location.href = '/'}} type='button' className="btn_blue">확인</button></div>
        </form>
    )
}

export default Search;