import { useState } from 'react';
import './Search.css';
import axios from 'axios';

function Search(){
    const [detailData, setDetailData] = useState([]);
    const [checkedNationality , setCheckedNationality] = useState('내국인');
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleNameChange=(event) => {
        setName(event.target.value);
    }
    const handlePhoneNumberChange=(event) => {
        setPhoneNumber(event.target.value);
    }

    function checkOneNationality(e){
        const checkedNationality = document.getElementsByName('nationality');
        Array.prototype.forEach.call(checkedNationality, function(item){
            item.checked = false;
        });
        e.target.checked = true;
        setCheckedNationality(e.target.value);
    }
    function searchRes() {
        const apiUrl = `http://123.143.44.130:8084/visit-reservation-hist/get-list?name=박문자&phoneNumber=01012345678&page=0&size=20`;
        console.log(apiUrl);
        axios.get(apiUrl)
        .then((res)=>{
            console.log(res);
            console.log(res.data.content);
            console.log(res.data.content[0].reservationId);
            console.log(res.data.content[0].name);
            const {reservationId, createDate, team, name, visitDate, escortEmployeeName, status, parkingApprovalStatus} = res.data.content[0];
            setDetailData(detailData => [
                ...detailData, 
                { reservationId, createDate, team, name, visitDate, escortEmployeeName, status, parkingApprovalStatus }
            ]);
            console.log(detailData);
        }).catch(err => {
            console.error('API 호출 에러:', err);
            alert('데이터를 가져오는 중 오류가 발생했습니다.');
        });
    }
    
    return(
        <form action="#">
            <h2>방문신청 조회</h2>
            <section className='apply-info'>
                <h5>신청자 정보</h5>
                <ul>
                    <li><label name='name'>방문자 이름</label><input type='text'value={name} onChange={handleNameChange}/>
                                <div className='nationality flex'>
                                <input type="checkbox" id="domestic" name="nationality" value="내국인" 
                                    onChange={(e)=>checkOneNationality(e)} checked={checkedNationality==='내국인'}/><span>내국인</span>

                                    <input type="checkbox" id="foreigner" name="nationality" value="외국인" 
                                    onChange={(e)=>checkOneNationality(e)} checked={checkedNationality==='외국인'}/><span>외국인</span>
                                </div></li>
                    <li><label name='phoneNumber'>방문신청번호</label><input type='number' value={phoneNumber} onChange={handlePhoneNumberChange}/></li>
                </ul>
                <button type='submit' onClick={searchRes}>조회</button>
            </section>
            <section className='search-info'>
                <h5>조회 결과</h5>
                <section className='search-part'>
                        <div className='flex width100 layout'>
                            <div className='search-list-result width100'>
                                {detailData.map((data, i)=>(
                                    <div className='search-list flex' key={i}>
                                        <div><label>No</label><p>{data.reservationId}</p></div>
                                        <div><label>신청일자</label><p>{data.createDate}</p></div>
                                        <div><label>회사</label><p>{data.team}</p></div>
                                        <div><label>이름</label><p>{data.name}</p></div>
                                        <div><label>방문일자</label><p>{data.visitDate}</p></div>
                                        <div><label>인솔자 정보</label><p>{data.escortEmployeeName}</p></div>
                                        <div><label>방문</label><p>{data.status}</p></div>
                                        <div><label>주차</label><p>{data.parkingApprovalStatus}</p></div>
                                        </div>
                                ))}    
                            </div>
                        </div>
                        <div className='submit-part'>
                        <button id='submitBtn' type='submit'>확인</button>
                        </div>
                    </section>
            </section>
        </form>
    )
}

export default Search;