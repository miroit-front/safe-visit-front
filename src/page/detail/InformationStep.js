import './InformationStep.css';
import { useState } from 'react';
import ExcelUploadBtn from './modal/ExcelUploadBtn';
import axios from 'axios';

function Apply({onNext}){      
    const [checkedNationality , setCheckedNationality] = useState('내국인'); //내외국인 체크박스
    const [checkedDay , setCheckedDay] = useState('1day');//1일, 2일 체크박스
    const [excelModalOpen, setExcelModalOpen] = useState(false);  //엑셀 모달 열고닫는 useState
    const [isValidStaff, setIsValidStaff] = useState(false);

    const [staffName, setStaffName] = useState(''); //임직원 확인 시 이름 state
    const [staffPhoneNumber, setStaffPhoneNumber] = useState('');//임직원 확인 시 번호 state

    const handleNameChange = (e) =>{ //이름입력
        setStaffName(e.target.value);
    }
    const handlePhoneNumberChange = (e) =>{//폰번호입력
        setStaffPhoneNumber(e.target.value);
    }

    const visitApplyBtn=(e)=>{
        e.preventDefault();
        //임직원정보 전송해서 검증하기
        const apiUrl_staff = ''; //임직원정보 api
        axios.post(apiUrl_staff, {staffName, staffPhoneNumber}) //api로 임직원 정보 보냄
        .then(response =>{
            //api응답을 받아 유효성 확인 후 처리
            const isValid = response.data.isValid;
            setIsValidStaff(isValid);
            if(isValid){
                setStaffName(response.data.staffName); //staffName은 수정할 것
                setStaffPhoneNumber(response.data.staffPhoneNumber);//staffPhoneNumber은 수정할 것
                console.log(staffName, staffPhoneNumber);
            }else{
                alert('임직원 정보를 확인해주세요');
            }
        })
    }     

    function checkOneNationality(e){
        const checkedNationality = document.getElementsByName('nationality');
        Array.prototype.forEach.call(checkedNationality, function(item){
            item.checked = false;
        });
        e.target.checked = true;
        setCheckedNationality(e.target.value);
    }

    function checkOneDay(e){
        const checkedDay = document.getElementsByName('day');
        Array.prototype.forEach.call(checkedDay, function(item){
            item.checked = false;
        });
        e.target.checked = true;
        setCheckedDay(e.target.value);
    }

    function handleExcelModalToggle(){
        setExcelModalOpen(!excelModalOpen);
    }

    return(
        <div>
            <form action="#">
                <section className="apply_tit">
                    <h3>방문신청 정보 입력</h3>
                    <p>접견자와 방문자 정보를 입력해주세요.</p>
                </section>
                <section className='staff-info'>
                    <h5>임직원 정보 <span className='tit_info'>&#42; 임직원(접견자) 조회 완료 후 방문신청을 할 수 있습니다.</span></h5>
                    <ul>
                        <li><label>임직원 이름</label><input type='text'value={staffName} onChange={handleNameChange}/></li>
                        <li><label>전화번호 뒤 4자리</label><input type='number' value={staffPhoneNumber} onChange={handlePhoneNumberChange}/></li>
                    </ul>
                    <div className="center_btn"><button type='submit' onClick={visitApplyBtn} className="btn_blue">조회</button></div>
                </section>
                <section className='visitor-info'>
                    <h5>방문자 정보</h5>
                    <ul className='v-info-1'> 
                        <li><label>회사명</label><input type='text'/></li>
                        <li className='flex'><label>성명</label>
                            <input className='min-input' type='text'/>
                            <div className='nationality flex'>
                                <input type="radio" id="domestic" name="nationality" value="내국인"onChange={(e)=>checkOneNationality(e)}/><span>내국인</span>
                                <input type="radio" id="foreigner" name="nationality" value="외국인" onChange={(e)=>checkOneNationality(e)}/><span>외국인</span>
                            </div>
                        </li>
                    </ul>
                    <ul className='v-info-2'>
                        <li><label>직책</label><input type='text'/></li>
                        <li className='width100'>
                            <label>전화번호</label>
                            <input className='width100' type='number'/>
                        </li>
                    </ul>
                    <ul className='v-info-3'>
                        <li className='width100'><label>방문일시</label>
                            <input type='date'/><input type='time'/>
                            <span>~</span>
                            <input type='date'/><input type='time'/>
                            <div className='day flex'>
                                <input type="radio" id="oneDay" name="day" value="1day" onChange={(e)=>{checkOneDay(e)}} 
                                /><span>1일</span>
                                <input type="radio" id="twoDay" name="day" value="2day" onChange={(e)=>{checkOneDay(e)}}
                                /><span>2일</span>
                            </div>
                        </li>
                    </ul>
                    <ul className='v-info-4'>
                        <li><label>생년월일</label><input type='text'/></li>
                        <li><label>방문 구역</label><input type='text'/></li>
                    </ul>
                    <ul className='v-info-5'>
                        <li><label>방문목적</label><input type='text'/></li>
                        <li>
                            <label>차량번호</label>
                            <input className='min-input' type='text'/>
                            <input type="checkbox" id="office" name="office" value="office"/><span>사옥 내 진입</span>
                        </li>
                    </ul>
                    <ul className='v-info-6'>
                        <li>
                            <label>주소</label>
                            <input type='text'/>
                        </li>
                    </ul>
                    <ul className='v-info-7'>
                        <li>
                            <label>추가사항</label>
                            <textarea></textarea>
                        </li>
                    </ul>
                </section>
                <section className='visitor-info-group'>
                    <div className='visitor_add'>
                        <p>방문자 추가를 눌러 추가 방문객 정보를 입력해주세요.</p>
                        <button type='update' className='update-btn'><span>방문자 추가</span></button>
                    </div>
                    <div className='addvisitor_form'>

                    </div>
                    <div className='visit_group_add'>
                        <div className='group_tit'>단체 방문 안내</div>
                        <div className='group_con'>
                            엑셀을 업로드하여 다수의 방문자를 등록할 수 있습니다.<br />
                            아래 양식을 다운로드하여 입력 후 업로드하시기 바랍니다.(최대 00명)
                            <ul>
                                <li><button className="download-btn">양식 다운로드</button></li>
                                <li><input type="file"/>
                                <button type='upload' className='upload-btn'>파일선택</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="center_btn">
                        <button onClick={(e)=>{window.location.href = '/'}} type='button' className="btn_gr">이전</button>
                        <button button id='submitBtn' type='submit' onClick={onNext} className="btn_blue">신청</button>
                    </div>
                            {/*<div className='flex width100 layout'>
                                <div className='visitor-info-group-list width90'>
                                        <div className='group-list topPart flex'>
                                            <div><label>회사명</label><p></p></div>
                                            <div><label>직책</label><p></p></div>
                                            <div><label>성명</label><p></p></div>
                                            <div><label>생년월일</label><p></p></div>
                                            <div><label>연락처</label><p></p></div>
                                            <div><label>차량번호</label><p></p></div>
                                        </div>
                                        <div className='group-list'>
                                            <div className='flex'><label>주소</label><p></p></div>
                                        </div>
                                </div>
                                <div className='visitor-info-group-list width10'>
                                    <div className='del-part'>
                                        <div><label>삭제</label><p className='delPart'></p></div>
                                    </div>
                                </div>
                            </div>
                            <div className='upBtns'>
                                <ExcelUploadBtn onToggle={handleExcelModalToggle}/>
                                <button type='update' className='update-btn'>+ 방문객 추가</button>
                            </div>
                            */}
                </section>
            </form>
        </div>
    )};

export default Apply;