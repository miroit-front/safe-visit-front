import './InformationStep.css';
import { useState } from 'react';
import { useRef } from "react";
import ExcelUploadBtn from './modal/ExcelUploadBtn';
import axios from 'axios';
import InformationPlusData from './InformationPlusData';
import ApplyDate from './ApplyDate';

function InformationStep({onNext, visitorData, setVisitorData, onChange }){      
    const [checkedNationality , setCheckedNationality] = useState('내국인'); //내외국인 체크박스
    const [checkedDay , setCheckedDay] = useState('1day');//1일, 2일 체크박스
    const [excelModalOpen, setExcelModalOpen] = useState(false);  //엑셀 모달 열고닫는 useState
    const [selectedOption, setSelectedOption] = useState(''); //방문구역 secletbox
    const [selectedFile, setSelectedFile] = useState(null); // 파일선택
    const [isValidStaff, setIsValidStaff] = useState(false);
    const [staffName, setStaffName] = useState('');
    const [staffPhoneNumber, setStaffPhoneNumber] = useState('');


    //임직원 이름입력
    const handleNameChange = (e) =>{ 
        setStaffName(e.target.value);
    }

    //임직원 폰번호입력
    const handlePhoneNumberChange = (e) =>{
        setStaffPhoneNumber(e.target.value);
    }

    //임직원정보 전송해서 검증하기
    const visitApplyBtn=(e)=>{
        e.preventDefault();
        const apiUrl_apply = '';
        axios.post(apiUrl_apply, {staffName, staffPhoneNumber})
        .then(response =>{
            //api응답을 받아 유효성 확인 후 처리
            const isValid = response.data.isValid;
            setIsValidStaff(isValid);
            if(isValid){
                setStaffName(response.data.name);
                setStaffPhoneNumber(response.data.phoneNumber);
                console.log(staffName, staffPhoneNumber);
            }else{
                alert('임직원 정보를 확인해주세요');
            }
        })
    }

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const fileInputRef = useRef(null);
    const fileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file); // 파일 선택 시 상태 업데이트
        } else {
            setSelectedFile(null); // 파일 선택 취소 시 상태 초기화
        }
    };

    const cancelUpload = () => {
        setSelectedFile(null); // 선택한 파일 상태 초기화
        document.getElementById('fileInput').value = ""; // 파일 입력 요소의 값을 초기화
    };

    const checkOneNationality = (e) =>{
        console.log(e);
        console.log(e.target.value);
        setCheckedNationality(e.target.value);
    }

    function checkOneDay(e){ //1일 2일 체크
        const checkedDay = e.target.value;
        e.target.checked = true;
        setCheckedDay(e.target.value);
    }

    function handleExcelModalToggle(){
        setExcelModalOpen(!excelModalOpen);
    }

    const [visitorForms, setVisitorForms] = useState([]); //방문객 추가
    const MAX_VISITORS = 10;

    const handleAddVisitorClick = () => {
        if (visitorForms.length < MAX_VISITORS) {
            setVisitorForms([...visitorForms, { id: visitorForms.length }]);
        } else {
            alert('최대 방문객 개수에 도달했습니다.');
        }
    };
    const handleDeleteVisitorClick = (id) => {
        setVisitorForms(visitorForms.filter(form => form.id !== id));
    };

    return(
        <div>
            <form action="#" className='applyForm'>
                <section className="apply_tit">
                    <h3>방문신청 정보 입력</h3>
                    <p>접견자와 방문자 정보를 입력해주세요.</p>
                </section>
                <section className='staff-info'>
                    <h5>임직원 정보 <span className='tit_info'>&#42; 임직원(접견자) 조회 완료 후 방문신청을 할 수 있습니다.</span></h5>
                    <ul>
                        <li><label>임직원 이름</label><input type='text'value={staffName} onChange={handleNameChange} placeholder='이름을 입력해주세요' title='임직원 이름'/></li>
                        <li><label>전화번호 뒤 4자리</label><input type='number' value={staffPhoneNumber} onChange={handlePhoneNumberChange} placeholder='숫자 4자리 입력해주세요' title='전화번호 뒤 4자리'/></li>
                    </ul>
                    <div className="center_btn"><button type='submit' onClick={visitApplyBtn} className="btn_blue">조회</button></div>
                </section>
                <section className='visitor-info'>
                    <h5>방문자 정보</h5>
                    <ul className='v-info-1'> 
                        <li><label>회사명</label><input type='text' placeholder={`회사명을 입력해주세요`} title='회사명'/></li>
                        <li className='flex'><label>성명</label>
                            <input className='min-input' type='text' placeholder={`성명을 입력해주세요`} title='성명'/>
                            <div className='nationality radio_bl'>
                                <input type="radio" id="domestic" name="nationality" value="내국인"
                                checked={checkedNationality === "내국인"} 
                                onChangeCapture={(e) => checkOneNationality(e)}
                                onChange={(e)=>checkOneNationality(e)}/><label for="domestic">내국인</label>
                                <input type="radio" id="foreigner" name="nationality" value="외국인" 
                                checked={checkedNationality === "외국인"} 
                                onChangeCapture={(e) => checkOneNationality(e)}
                                    onChange={(e)=>checkOneNationality(e)}/><label for="foreigner">외국인</label>
                            </div>
                        </li>
                    </ul>
                    <ul className='v-info-2'>
                        <li><label>직책</label><input type='text' placeholder='직책을 입력해주세요' title='직책'/></li>
                        <li>
                            <label>전화번호</label>
                            <input type='number' placeholder='숫자만 입력해주세요(-생략)' title='전화번호'/>
                        </li>
                    </ul>
                    <ul className='v-info-3'>
                        <li><label>방문일시</label>
                                <ApplyDate/>
                            <div className='day radio_bl'>
                                <input type="radio" id="oneDay" name="day" value="1day" onChange={(e)=>{checkOneDay(e)}}/><label for="oneDay">1일</label>
                                <input type="radio" id="twoDay" name="day" value="2day" onChange={(e)=>{checkOneDay(e)}}/><label for="twoDay">2일</label>
                            </div>
                        </li>
                    </ul>
                    <ul className='v-info-4'>
                        <li><label>생년월일</label><input type='text' placeholder='숫자 8자리 입력해주세요 YYYYMMDD' title='생년월일'/></li>
                        <li><label>이메일</label><input type='text' placeholder='이메일을 입력해주세요' title='이메일'/></li>
                    </ul>
                    <ul className='v-info-5'>
                        <li>
                            <label>방문구역</label>
                            <select value={selectedOption} onChange={handleChange} className='selectBox'>
                                <option value="">선택하세요</option>
                                <option value="option1">방문구역 1</option>
                                <option value="option2">방문구역 2</option>
                                <option value="option3">방문구역 3</option>
                            </select>
                        </li>
                        <li><label>방문목적</label><input type='text' placeholder='방문목적을 입력해주세요' title='방문목적'/></li>
                    </ul>
                    <ul className='v-info-6'>
                        <li>
                            <label>차량번호</label>
                            <input className='min-input' type='text' placeholder='빈칸없이 입력해주세요' title='차량번호'/>
                            <input type="checkbox" id="office" name="office" value="office"/><label for="office">사옥 내 진입</label>
                        </li>
                        <li><label>주소</label><input type='text' placeholder='방산구역 방문자만 입력해주세요' title='주소'/></li>
                    </ul>
                    <ul className='v-info-7'>
                        <li>
                            <label>추가사항</label>
                            <textarea placeholder='추가사항이 있을 시에 입력해주세요' title='추가사항'></textarea>
                        </li>
                    </ul>
                </section>
                <section className='visitor-info-group'>
                    <div className='visitor_add'>
                        <p>방문자 추가를 눌러 추가 방문객 정보를 입력해주세요.</p>
                        <button type="button" className='update-btn' onClick={handleAddVisitorClick}><span>방문자 추가</span></button>
                    </div>
                    <div className='addvisitor_form'>
                    {visitorForms.map(form => (
                        <InformationPlusData key={form.id} id={form.id} onDelete={handleDeleteVisitorClick} checkOneNationality={checkOneNationality} checkedNationality={checkedNationality}/>
                    ))}
                    </div>

                    <div className='visit_group_add'>
                        <div className='group_tit'>단체 방문 안내</div>
                        <div className='group_con'>
                            <span>방문자 수가 10명 이상일 시</span> 엑셀을 업로드하여 다수의 방문자를 등록할 수 있습니다.<br />
                            아래 양식을 다운로드하여 입력 후 업로드하시기 바랍니다.(최대 00명)
                            <ul className='exel_wrap'>
                                <li><button className="download-btn">양식 다운로드</button></li>
                                <li>
                                    <div className='filename_wrap'><input type="text" value={selectedFile ? selectedFile.name : "파일을 선택하세요"} readOnly /> {/* 파일 이름 표시 input */}
                                    {selectedFile && <button type='button' className='btn_delete' onClick={cancelUpload}></button>} {/* 파일 선택 취소 버튼 */}</div>
                                    <button type='button' className='upload-btn' onClick={() => document.getElementById('fileInput').click()}>엑셀 업로드</button>
                                    <input id="fileInput" type="file" accept=".xlsx, .xls" style={{display:'none'}} onChange={fileChange} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="center_btn">
                        <button onClick={(e)=>{window.location.href = '/'}} type='button' className="btn_gr">이전</button>
                        <button button id='submitBtn' type='submit' className="btn_blue" onClick={onNext}>신청</button>
                    </div>
                </section>
            </form>
        </div>
    )};

    export default InformationStep;
    