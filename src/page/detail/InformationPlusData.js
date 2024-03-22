import { useState } from "react";

function InformationPlusData  ({ id, onDelete, handleVisitorPlusInfo }){
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [visitorName, setVisitorName] = useState('');
    const [foreignerStatus, setForeignerStatus] = useState('');
    const [resiNumber, setResiNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [carNumber, setCarNumber] = useState('');
    const [address, setAddress] = useState('');
    const [primaryVisitor, setPrimaryVisitor] = useState('');


    // 회사명 입력 변경 시 호출되는 함수
    const handleCompanyNameChange = (e) => {
        const newCompanyName = e.target.value;
        setCompanyName(newCompanyName);

        // 변경된 회사명을 상위 컴포넌트로 전달
        handleVisitorPlusInfo(id, { companyName: newCompanyName });
    };
    
    const handleJobTitleChange = (e) => setJobTitle(e.target.value);
    const handleVisitorNameChange = (e) => setVisitorName(e.target.value);
    const handleForeignerStatusChange = (e) => setForeignerStatus(e.target.value);
    const handleResiNumberChange = (e) => setResiNumber(e.target.value);
    const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
    const handleCarNumberChange = (e) => setCarNumber(e.target.value);
    const handleAddressChange = (e) => setAddress(e.target.value);
    const handlePrimaryVisitoChange = (e) => setPrimaryVisitor(e.target.value);

    /*추가방문자 내외국인 체크*/
    const checkNationalityPlus = (e) =>{
        const newForeignerStatus = e.target.value; //현재 체크된 value
        console.log(e.target.value);
        setForeignerStatus(newForeignerStatus);
        handleVisitorPlusInfo(id, {foreignerStatus: newForeignerStatus,})
    }


    return (
        <form>
            <div className='form_wrap'>
                        <ul>
                            <li><label>회사명</label><input value={companyName} type='text' placeholder='회사명을 입력해주세요' title='회사명'/></li>
                            <li><label>성명</label>
                                <input type='text' value={visitorName} onChange={handleVisitorNameChange} placeholder='성명을 입력해주세요' title='성명'/>
                                <div className='nationality radio_bl'>
                                    <input type="radio" id={'domestic_add_${id}'} name={'domestic_add_${id}'} value="N" checked={foreignerStatus === "N"} 
                                        onChange={checkNationalityPlus}/><label htmlFor="domestic_add">내국인</label>
                                    <input type="radio" id={'foreigner_add_${id}'} name={'foreigner_add_${id}'} value="Y" checked={foreignerStatus === "Y"}
                                        onChange={checkNationalityPlus}/><label htmlFor="foreigner_add">외국인</label>
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li><label>직책</label><input type='text' value={jobTitle} onChange={handleJobTitleChange} placeholder='직책을 입력해주세요' title='직책'/></li>
                            <li>
                                <label>전화번호</label>
                                <input type='number' value={phoneNumber} onChange={handlePhoneNumberChange} placeholder='숫자만 입력해주세요(-생략)' title='전화번호'/>
                            </li>
                        </ul>
                        <ul>
                            <li><label>생년월일</label><input type='text' value={resiNumber} onChange={handleResiNumberChange} placeholder='숫자 8자리 입력해주세요 YYYYMMDD' title='생년월일'/></li>
                            <li><label>이메일</label><input type='text' placeholder='이메일을 입력해주세요' title='이메일'/></li>
                        </ul>
                        <ul>
                            <li><label>차량번호</label><input type='text' value={carNumber} onChange={handleCarNumberChange} placeholder='빈칸없이 입력해주세요' title='차량번호'/></li>
                            <li><label>주소</label><input type='text' value={address} onChange={handleAddressChange} className='l_input' placeholder='방산구역 방문자만 입력해주세요' title='주소'/></li>
                        </ul>
            </div>
            <div className='form_delete'><button type="button" onClick={() => onDelete(id)}>삭제</button></div>
        </form>
    );
};

export default InformationPlusData;