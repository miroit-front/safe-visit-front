import { useState } from 'react';
import './Apply.css';
import AgreementModal from './modal/AgreementModal';
import ExcelUploadBtn from './modal/ExcelUploadBtn';

function Apply(){      
    const [checkedNationality , setCheckedNationality] = useState('내국인');
    const [checkedDay , setCheckedDay] = useState('1day');
    const [isOpen, setIsOpen] = useState(true);

    const handleConfirmModal = () => {
        setIsOpen(false);
    };
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

    return(
        <div>
        {isOpen && <AgreementModal onClose={handleConfirmModal}  isOpen={isOpen} setIsOpen={setIsOpen}/>}
        {!isOpen && (
            <form action="#">
                {isOpen && <AgreementModal onClose={handleConfirmModal} isOpen={isOpen} setIsOpen={setIsOpen}/>}
                <h2>방문신청</h2>
                <section className='staff-info'>
                    <h5>임직원 정보</h5>
                    <ul>
                        <li><label>임직원 이름</label><input type='text'/></li>
                        <li><label>전화번호 뒤 4자리</label><input type='number'/></li>
                    </ul>
                    <button type='submit'>확인</button>
                </section>
                <section className='visitor-info'>
                        <h5>방문자 정보</h5>
                        <ul className='v-info-1'>
                            <li><label>회사명</label><input type='text'/></li>
                            <li className='flex'><label>성명</label>
                            <input className='min-input' type='text'/>
                                <div className='nationality flex'>
                                    <input type="checkbox" id="domestic" name="nationality" value="내국인" 
                                    onChange={(e)=>checkOneNationality(e)} checked={checkedNationality==='내국인'}/><span>내국인</span>

                                    <input type="checkbox" id="foreigner" name="nationality" value="외국인" 
                                    onChange={(e)=>checkOneNationality(e)} checked={checkedNationality==='외국인'}/><span>외국인</span>
                                </div>
                            </li>
                        </ul>
                        <ul className='v-info-2'>
                            <li><label>직책</label><input type='text'/></li>
                            <li className='width100'><label>전화번호</label>
                            <input className='width100' type='number'/></li>
                        </ul>
                        <ul className='v-info-3'>
                            <li className='width100'><label>방문일시</label>
                                <input type='date'/><input type='time'/>
                                <span>~</span>
                                <input type='date'/><input type='time'/>
                                <div className='day flex'>
                                    <input type="checkbox" id="oneDay" name="day" value="1day" onChange={(e)=>{checkOneDay(e)}} checked={checkedDay==='1day'}/><span>1일</span>
                                    <input type="checkbox" id="twoDay" name="day" value="2day" onChange={(e)=>{checkOneDay(e)}} checked={checkedDay==='2day'}/><span>2일</span>
                                </div>
                            </li>
                        </ul>
                        <ul className='v-info-4'>
                            <li><label>생년월일</label><input type='text'/></li>
                            <li><label>방문 구역</label><input type='text'/></li>
                        </ul>
                        <ul className='v-info-5'>
                            <li><label>방문목적</label><input type='text'/></li>
                            <li className='width100'>
                                <label>차량번호</label>
                                <input className='min-input width100' type='text'/></li>
                            <li><input type="checkbox" id="office" name="office" value="office"/><span>사옥 내 진입</span></li>

                        </ul>
                        <ul className='v-info-6'>
                            <li className='width100'><label>주소</label>
                            <input className='width100' type='text'/></li>
                        </ul>
                        <ul className='v-info-7'>
                            <li className='width100'><label>추가사항</label>
                            <textarea className='width100'></textarea></li>
                        </ul>
                    </section>
                    <section className='visitor-info-group'>
                        <div className='flex width100 layout'>
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
                            <ExcelUploadBtn/>
                            <button type='update' className='update-btn'>+ 방문객 추가</button>
                        </div>
                        <div className='submit-part'>
                        <button id='submitBtn' type='submit'>신청</button>
                        </div>
                    </section>
            </form>
        )}
        </div>
    );
}

export default Apply;