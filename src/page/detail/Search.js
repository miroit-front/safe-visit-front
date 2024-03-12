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
        const apiUrl_search = `visit-reservation-hist/get-list?name=${name}&phoneNumber=${phoneNumber}&page=0&size=20`; //api주소 객체에 담아
        console.log(apiUrl_search);

        axios.get(apiUrl_search) //get방식으로 보내서
        .then(res=>{ //답변res받음
            console.log(res);
            console.log(res.data.content);

            const newData = res.data.content.map(data=>({ //res의 data안에 content를 반복문에 돌리고 newData라는 객체에 담음
                reservationId: data.reservationId,
                createDate: data.createDate,
                team: data.team,
                name: data.name,
                visitDate: data.visitDate,
                escortEmployeeName: data.escortEmployeeName,
                status: data.status,
                parkingApprovalStatus: data.parkingApprovalStatus
            }));
            setDetailData(newData); //setDetailData에 newData를 저장
        }).catch(err => {
            console.error('API 호출 에러:', err.response.data.info);
            console.log(err.response.status);
            alert('데이터를 가져오는 중 오류가 발생했습니다.');
        });
    }
    
    return(
        <form action="#">
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
                <div className="center_btn"><button type='submit' onClick={searchRes} className="btn_blue">조회</button></div>
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
                        <div className="center_btn"><button id='submitBtn' type='submit' className="btn_blue">확인</button></div>
                    </section>
            </section>
        </form>
    )
}

export default Search;