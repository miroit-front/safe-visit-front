import './InformationStep.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import InformationPlusData from './InformationPlusData';
import ApplyDate from './ApplyDate';
import { format } from 'date-fns';

function InformationStep({onNext, personalInfoConsent}){      
    const [selectedFile, setSelectedFile] = useState(null); // 파일선택
    
    const [menu, setMenu] = useState(['목적1', '목적2', '목적3', '목적4']);
  
    const [showMenu, setShowMenu] = useState(false); // 옵션박스 열고 닫힘 여부를 알려주는 값
    
    const [isValidStaff, setIsValidStaff] = useState(false);//임직원 조회시 
    const [staffName, setStaffName] = useState(''); //임직원 이름
    const [staffPhoneNumber, setStaffPhoneNumber] = useState(''); //임직원 폰번호
    const [escortEmployeeTeam, setEscortEmployeeTeam] = useState(''); // 에스코드 직원의 팀


    /*방문자 신청 정보 state*/
    const [reservationSite, setReservationSite] = useState('');
    const [employeeNumber, setEmployeeNumber] = useState('');
    const [employeeName, setEmployeeName] = useState(''); //곧 추가될 데이터들
    const [employeeTeam, setEmployeeTeam] = useState(''); //곧 추가될 데이터들

    const [escortEmployeeName, setEscortEmployeeName] = useState('');
    const [applicantName, setApplicantName] = useState('');
    const [applicantTeam, setApplicantTeam] = useState('');
    const [applicantEmail, setApplicantEmail] = useState(''); 
    
    
    const [companyName, setCompanyName] = useState(''); //대표방문자 회사명 state
    const [visitorName, setVisitorName] = useState(''); //대표방문자 이름 state
    const [foreignerStatus, setForeignerStatus] = useState('N'); //대표방문자 내외국인 체크박스, 외국인Y 내국인N state
    const [jobTitle, setJobTitle] = useState('');//대표방문자 직책 state
    const [phoneNumber, setPhoneNumber] = useState(''); //대표방문자 폰번호 state
    const [visitStartDt, setVisitStartDt] = useState(new Date()); //대표방문자 방문 첫 날 state
    const [visitEndDt, setVisitEndDt] = useState(new Date()); //대표방문자 방문 마지막 날 state
    const [visitDepartmentLimitStatus, setVisitDepartmentLimitStatus] = useState(null); //대표방문자 1일, 2일 체크 state
    const [selectedDate, setSelectedDate] = useState(new Date()); //대표방문자 선택된 날짜 state
    const [resiNumber, setResiNumber] = useState(''); //대표방문자 생년월일
    const [email, setEmail] = useState(''); //대표방문자 생년월일

    const [visitPurpose, setVisitPurpose] = useState(''); //대표방문자 방문 목적 state
    const [carNumber, setCarNumber] = useState(''); //대표방문자 차량번호 stat
    const [vehicleShortTermEntry, setVehicleShortTermEntry] = useState('N'); //대표방문자 사옥내 진입일 때 Y state, N은 디폴트로 수정함
    const [address, setAddress] = useState(''); //대표방문자 주소
    const [applicantComment, setApplicantComment] = useState(''); //대표방문자 추가사항 state 
    const [primaryVisitor, setPrimaryVisitor] = useState('Y');//대표방문자일때만 Y state
    const [visitDepartment, setVisitDepartment] = useState(visitPurpose);

    /*방문자 신청 정보 핸들러*/
    const handleReservationSiteChange = (e) => {setReservationSite(e.target.value);};
    const handleEmployeeNumberChange = (e) => {setEmployeeNumber(e.target.value);}
    const handleEmployeeNameChange = (e) => {setEmployeeName(e.target.value);}
    const handleEmployeeTeamChange = (e) => {setEmployeeTeam(e.target.value);}
    const handleEscortEmployeeNameChange = (e) => {setEscortEmployeeName(e.target.value);}
    const handleApplicantNameChange = (e) => {setApplicantName(e.target.value);}
    const handleApplicantTeamChange = (e) => {setApplicantTeam(e.target.value);}
    const handleApplicantEmailChange = (e) => {setApplicantEmail(e.target.value);}

    const handleVisitPurposeChange = (e) => {setVisitPurpose(e.target.value);}
    const handleVisitDepartmentChange = (e) => {setVisitDepartment(visitPurpose);}
    const handleVisitStartDtChange = (e) => {setVisitStartDt(e.target.value);}
    const handleVisitEndDtChange = (e) => {setVisitEndDt(e.target.value);}
    
    
    /*방문자 정보 시작 */
    const handleCompanyNameChange = (e) => {setCompanyName(e.target.value);} //회사명 저장
    const handleJobTitleChange = (e) => {setJobTitle(e.target.value);} //직책 저장
    const handleVisitorNameChange = (e) => {setVisitorName(e.target.value);} //성명 저장
    const handleResiNumberChange = (e) => {setResiNumber(e.target.value);} //생년월일 저장
    const handlePhoneNumberChange = (e) => {setPhoneNumber(e.target.value);} //폰번호 저장
    const handleCarNumberChange = (e) => {setCarNumber(e.target.value);} //차량번호 저장
    const handleEmailChange = (e) => {setEmail(e.target.value);} //차량번호 저장
    const handleVisitDepartmentLimitStatusChange = (e) => {setVisitDepartmentLimitStatus(e.target.value);} // 1일,2일 기간 저장
    const handleAddressChange = (e) => {setAddress(e.target.value);} //주소 저장(방산구역 방문자만)
    const handlePrimaryVisitoChange = (e) => {setPrimaryVisitor(e.target.value);} //대표방문자일때
    const handleVehicleShortTermEntryChange = (e) => {setVehicleShortTermEntry(e.target.checked ? "Y" : "")}; // 체크되면 "Y", 아니면 빈 문자열 저장
    const handleApplicantCommentChange = (e) => {setApplicantComment(e.target.value);} //추가사항

    /*내외국인 체크*/
    const handleForeignerChange = (e) =>{
        console.log(e.target.value);
        setForeignerStatus(e.target.value); //외국인은 Y, 내국인 N 저장됨
    }

    /*방문 목적 체크*/
    const handleSelect = (cate) => {
        setVisitPurpose(cate);
        setShowMenu(false);
    }

    /*추가 방문객 정보*/
    const [visitorPlusInfo, setVisitorPlusInfo] = useState([{ 
        visitorName: '',
        foreignerStatus: '',
        resiNumber: '',
        phoneNumber: '',
        carNumber: '',
        address: '',
        primaryVisitor: 'N',
    }]); 

    /*추가 방문객 정보 받아서 업데이트하는 함수*/
    const handleVisitorPlusInfo = (index, plusData) => {
        const updatedPlusVisitor = [...visitorPlusInfo]; 
        updatedPlusVisitor[index] = plusData;
        console.log(plusData);
        setVisitorPlusInfo(updatedPlusVisitor);
    }

   
    /*임직원 이름입력*/
    const handleStaffNameChange = (e) =>{ 
        setStaffName(e.target.value);
    }

    /*임직원 폰번호입력*/
    const handleStaffPhoneNumberChange = (e) =>{
        setStaffPhoneNumber(e.target.value);
    }


    /*임직원 조회 상태 업뎃 후 변경된 값 확인하는 useEffect*/
    useEffect(() => {
        //상태가 업뎃되면 원하는 로직 실행
        if(isValidStaff){
            console.log("Valid staff info:", staffName, staffPhoneNumber, escortEmployeeTeam);
        }
    }, [isValidStaff, staffName, staffPhoneNumber, escortEmployeeName, escortEmployeeTeam]); //의존성 배열에 상태 추가

    /*임직원정보 전송해서 검증하기*/
    const visitApplyBtn=(e)=>{
        e.preventDefault();
        const apiUrl_apply = '';
        axios.post(apiUrl_apply, {name : staffName, phoneNumber : staffPhoneNumber})
        .then(response =>{
            //api응답을 받아 유효성 확인 후 처리
            const {isValid, staffName, staffPhoneNumber, escortEmployeeName} = response.data.isValid;
            setIsValidStaff(isValid);
            if(isValid){
                setStaffName(response.data.name);
                setStaffPhoneNumber(response.data.phoneNumber);
                setEscortEmployeeTeam(response.data.employeeTeam); 
                console.log(staffName, staffPhoneNumber, escortEmployeeName);
            }else{ 
                alert('임직원 정보를 확인해주세요');
            }
        })
    }

    
    /*api로 데이터 보내는 함수*/
    function applyInfor(e){
        e.preventDefault(); // 폼 기본 제출동작 방지

       // 서버에 맞는 날짜 포맷으로 변환
        const formattedVisitStartDt = format(visitStartDt, "yyyy-MM-dd HH:mm:ss");
        const formattedVisitEndDt  = format(visitEndDt, "yyyy-MM-dd HH:mm:ss");

        console.log(formattedVisitStartDt);
        console.log(formattedVisitEndDt );
        console.log(companyName);
        console.log(foreignerStatus);
        console.log(resiNumber);
        console.log(phoneNumber);
        console.log(carNumber);
        console.log(address);
        console.log(email);
        console.log(primaryVisitor);
        console.log(applicantComment);
        console.log(vehicleShortTermEntry);

        const request = { // 전송할 데이터 변수에 담음
                reservationSite: "VISITOR",
                employeeNumber: "000009",
                employeeName : "이주연",
                employeeTeam : "개발팀",
                escortEmployeeTeam: "자금전략실",
                escortEmployeeName: "김대한",
                applicantCompany: "MiroIT",
                applicantTeam: "개발팀",
                applicantJob: "대리",
                applicantEmployeeNumber: 'string',
                applicantName: "이주연",
                applicantPhoneNumber: phoneNumber,
                applicantEmail: "2mail@mail.com",
                applicantComment: applicantComment,
                visitPurpose: visitPurpose,
                visitDepartment: "자금전략실",
                visitDepartmentLimitStatus: visitDepartmentLimitStatus,
                visitStartDt: formattedVisitStartDt, //변환된 타입의 시작날짜
                visitEndDt: formattedVisitEndDt, //변환된 타입의 마지막 날짜
                personalInfoConsent: personalInfoConsent,
                vehicleShortTermEntry: vehicleShortTermEntry,
                visitorList: [ //기본 방문자 정보와 추가 방문자정보 배열을 visitorList라는 하나의 요청으로 전송
                {
                        companyName: companyName,
                        jobTitle: jobTitle,
                        name: visitorName,
                        foreignerStatus: foreignerStatus,
                        resiNumber: resiNumber,
                        phoneNumber: phoneNumber,
                        carNumber: carNumber,
                        address:  address,
                        email: email,
                        primaryVisitor: "Y",
                        },
                       // ...visitorPlusInfo 
                    ],
                    user: "tester",
                };

        // const request = {
        //     reservationSite: "VISITOR",
        //     employeeNumber: "000009",
        //     employeeName : "강민지",
        //     employeeTeam : "개발팀",
        //     escortEmployeeTeam: "자금전략실",
        //     escortEmployeeName: "김대한",
        //     applicantCompany: "MiroIT",
        //     applicantTeam: "개발팀",
        //     applicantJob: "대리",
        //     applicantEmployeeNumber: "string",
        //     applicantName: "박문자",
        //     applicantPhoneNumber: "01012341234",
        //     applicantEmail: "mail@mail.com",
        //     applicantComment: "신속한 처리 부탁드립니다.",
        //     visitPurpose: "회의",
        //     visitDepartment: "자금전략실",
        //     visitDepartmentLimitStatus: "N",
        //     visitStartDt: "2024-05-01 13:00:00",
        //     visitEndDt: "2024-05-01 14:00:00",
        //     personalInfoConsent: "Y",
        //     vehicleShortTermEntry: "N",
        //     visitorList: [
        //       {
        //         companyName: "MiroIT",
        //         jobTitle: "대리",
        //         name: "박문자",
        //         foreignerStatus: "N",
        //         resiNumber: "991231",
        //         phoneNumber: "01012345678",
        //         carNumber: "12가1234",
        //         address: "서울특별시 중구 세종대로 110",
        //         email: "mail@mail.com",
        //         primaryVisitor: "Y"
        //       }
        //     ]
        //   };

        request.visitorList.forEach(visitor => {
            console.log('visitor.name : ',visitor.name);
          });

        const apiUrl_applyInfor = '/reservation/save'; //api 호출 통해 서버로 데이터 전송
        console.log('apiUrl_applyInfor : ',apiUrl_applyInfor);
        const data = new FormData();
        data.append('request', new Blob([JSON.stringify(request)], { type: 'application/json' })); // requestObject는 방문 예약 정보를 담은 객체입니다.
        console.log('data : ',data);

        axios.post(apiUrl_applyInfor, data)
        .then(response =>{
            console.log(response.data);//처리결과 출력
            onNext();
        })
        .catch(error => {
            if (error.response) {
                // 요청이 이루어졌으며 서버가 상태 코드로 응답했지만
                // 요청 처리 중 오류가 발생했습니다.
                console.log('Error data:', error.response.data);
                console.log('Error status:', error.response.status);
                console.log('Error headers:', error.response.headers);
            } else if (error.request) {
                // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                // Node.js의 http.ClientRequest 인스턴스입니다.
                console.log('Error request:', error.request);
            } else {
                // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                console.log('Error', error.message);
            }
            console.log(error.config);
        });

    //     const apiUrl_applyInfor = '/reservation/save'; //api 호출 통해 서버로 데이터 전송
    //     console.log(apiUrl_applyInfor);   
    //     console.log(Date()+"제출된 신청 정보:", request); // 모든 입력 데이터
    //     axios.post(apiUrl_applyInfor, request)
    //     .then(response =>{
    //         console.log(response.data);//처리결과 출력
    //         onNext();
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
     }

    


    useEffect(() => {
        // 전체 문서에 클릭 이벤트 추가
        document.addEventListener("click", handleDocumentClick);

        // 컴포넌트 언마운트 시 클릭 이벤트 제거
        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    /* 선택 상자 이외의 영역을 클릭했을 때 선택 상자를 닫음*/
    const handleDocumentClick = (event) => {    
        const selectBox = document.querySelector(".select-box");
        if (selectBox && !selectBox.contains(event.target)) {
            setShowMenu(false);
        }
    };

    // function handleExcelModalToggle(){
    //     setExcelModalOpen(!excelModalOpen);
    // }
    /*추가방문자 최대10명 제한*/
    const MAX_VISITORS = 10; 
    const handleAddVisitorClick = () => {
        if (visitorPlusInfo.length < MAX_VISITORS) {
            setVisitorPlusInfo([...visitorPlusInfo, { id: Date.now() }]); 
            //visitorPlusInfo.length는 상황에 따라 변할 수 있고 그렇게 되면 같은 id가 여러개 될 수 있기 때문에, 현재시간을 기반으로 한 id를 생성해주기로 함
        } else {
            alert('최대 방문객 개수에 도달했습니다.');
        }
    };

    const handleDeleteVisitorClick = (id) => {
        setVisitorPlusInfo(visitorPlusInfo.filter(form => form.id !== id));
    };

    /*엑셀파일 관련 함수 부분 */
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
                        <li><label>임직원 이름</label><input type='text'value={staffName} onChange={handleStaffNameChange} placeholder='이름을 입력해주세요' title='임직원 이름'/></li>
                        <li><label>전화번호 뒤 4자리</label><input type='number' value={staffPhoneNumber} onChange={handleStaffPhoneNumberChange} placeholder='숫자 4자리 입력해주세요' title='전화번호 뒤 4자리'/></li>
                    </ul>
                    <div className="center_btn"><button type='submit' onClick={visitApplyBtn} className="btn_blue">조회</button></div>
                </section>
                <section className='visitor-info'>
                    <h5>방문자 정보</h5>
                    <ul className='v-info-1'> 
                        <li><label>회사명</label><input type='text' value={companyName} onChange={handleCompanyNameChange} placeholder={`회사명을 입력해주세요`} title='회사명'/></li>
                        <li className='flex'><label>성명</label>
                            <input className='min-input' type='text' value={visitorName} onChange={handleVisitorNameChange} placeholder={`성명을 입력해주세요`} title='성명'/>
                            <div className='nationality radio_bl'>
                                <input type="radio" id="domestic" name="nationality" value="N"
                                checked={foreignerStatus === "N"} 
                                onChange={handleForeignerChange}/><label htmlFor="domestic">내국인</label>
                                <input type="radio" id="foreigner" name="nationality" value="Y" 
                                checked={foreignerStatus === "Y"} onChange={handleForeignerChange}/><label htmlFor="foreigner">외국인</label>
                            </div>
                        </li>
                    </ul>
                    <ul className='v-info-2'>
                        <li><label>직책</label><input type='text' value={jobTitle} onChange={handleJobTitleChange} placeholder='직책을 입력해주세요' title='직책'/></li>
                        <li>
                            <label>전화번호</label>
                            <input type='number' value={phoneNumber} onChange={handlePhoneNumberChange} placeholder='숫자만 입력해주세요(-생략)' title='전화번호'/>
                        </li>
                    </ul>
                    <ul className='v-info-3'>
                        <li>
                            <label>방문일시</label>
                            <ApplyDate visitStartDt={visitStartDt} setVisitStartDt={setVisitStartDt} visitEndDt={visitEndDt} setVisitEndDt={setVisitEndDt} selectedDate={selectedDate} setSelectedDate={setSelectedDate}
                            visitDepartmentLimitStatus={visitDepartmentLimitStatus} setVisitDepartmentLimitStatus={setVisitDepartmentLimitStatus}/>
                        </li>
                    </ul>
                    <ul className='v-info-4'>
                        <li><label>생년월일</label><input type='text' value={resiNumber} onChange={handleResiNumberChange} placeholder='숫자 6자리 입력해주세요 YYMMDD' title='생년월일'/></li>
                        <li><label>이메일</label><input type='text' value={email} onChange={handleEmailChange}  placeholder='이메일을 입력해주세요' title='이메일'/></li>
                    </ul>
                    <ul className='v-info-5'>
                        <li>
                            <label>방문구역</label>
                            <input type='text' value={visitDepartment} onChange={handleVisitPurposeChange} title='방문구역' readOnly />
                        </li>
                        <li><label>방문목적</label>
                        <div className='selectwrap'>
                                <div className={`select-box ${showMenu ? 'open' : ''}`} onClick={() => setShowMenu(!showMenu)}>
                                    {visitPurpose}
                                </div>

                                {showMenu && (
                                    <div className="select-options">
                                        {menu.map((item, index) => (
                                            <div key={index} className={`option-item ${item === visitPurpose ? 'select' : ''}`}
                                                onClick={() => handleSelect(item)}>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            </li>
                    </ul>
                    <ul className='v-info-6'>
                        <li>
                            <label>차량번호</label>
                            <input className='min-input' type='text' value={carNumber} onChange={handleCarNumberChange} placeholder='빈칸없이 입력해주세요' title='차량번호'/>
                            <input type="checkbox" checked={vehicleShortTermEntry === "Y"}  onChange={handleVehicleShortTermEntryChange} id="office" name="office"/><label htmlFor="office">사옥 내 진입</label>
                        </li>
                        <li><label>주소</label><input type='text' value={address} onChange={handleAddressChange} placeholder='방산구역 방문자만 입력해주세요' title='주소'/></li>
                    </ul>
                    <ul className='v-info-7'>
                        <li>
                            <label>추가사항</label>
                            <textarea value={applicantComment} onChange={handleApplicantCommentChange} placeholder='추가사항이 있을 시에 입력해주세요' title='추가사항'></textarea>
                        </li>
                    </ul>
                </section>
                <section className='visitor-info-group'>
                    <div className='visitor_add'>
                        <p>방문자 추가를 눌러 추가 방문객 정보를 입력해주세요.(최대 10명)</p>
                        <button type="button" className='update-btn' onClick={handleAddVisitorClick}><span>방문자 추가</span></button>
                    </div>
                    <div className='addvisitor_form'>
                    {visitorPlusInfo.map((form, data, index) => (
                        <InformationPlusData handleVisitorPlusInfo={handleVisitorPlusInfo} key={form.id} id={form.id} data={data} onDelete={handleDeleteVisitorClick}/>
                    ))}
                    </div>

                    <div className='visit_group_add'>
                        <div className='group_tit'>단체 방문 안내</div>
                        <div className='group_con'>
                            <span>방문자 수가 10명 이상일 시</span> 엑셀을 업로드하여 다수의 방문자를 등록할 수 있습니다.<br />
                            아래 양식을 다운로드하여 입력 후 업로드하시기 바랍니다.(최대 50명)
                            <ul className='exel_wrap'>
                                <li>
                                    <a href="public/additional-visitors.xlsx" download="additional-visitors.xlsx" class="download-btn">양식 다운로드</a>
                                    </li>
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
                        <button button id='submitBtn' type='submit' className="btn_blue" onClick={(e) => applyInfor(e)}>신청</button>
                    </div>
                </section>
            </form>
        </div>
    )};

    export default InformationStep;

