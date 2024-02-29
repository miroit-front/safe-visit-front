import { useState } from 'react';
import './Search.css';

function Search(){
    const [checkedNationality , setCheckedNationality] = useState('내국인');
    function checkOneNationality(e){
        const checkedNationality = document.getElementsByName('nationality');
        Array.prototype.forEach.call(checkedNationality, function(item){
            item.checked = false;
        });
        e.target.checked = true;
        setCheckedNationality(e.target.value);
    }
    return(
        <form action="#">
            <h2>방문신청 조회</h2>
            <section className='apply-info'>
                <h5>신청자 정보</h5>
                <ul>
                    <li><label>방문자 이름</label><input type='text'/>
                                <div className='nationality flex'>
                                <input type="checkbox" id="domestic" name="nationality" value="내국인" 
                                    onChange={(e)=>checkOneNationality(e)} checked={checkedNationality==='내국인'}/><span>내국인</span>

                                    <input type="checkbox" id="foreigner" name="nationality" value="외국인" 
                                    onChange={(e)=>checkOneNationality(e)} checked={checkedNationality==='외국인'}/><span>외국인</span>
                                </div></li>
                    <li><label>방문신청번호</label><input type='number'/></li>
                </ul>
                <button type='submit'>조회</button>
            </section>
            <section className='search-info'>
                <h5>조회 결과</h5>
                <section className='search-part'>
                        <div className='flex width100 layout'>
                            <div className='search-list-result width100'>
                                    <div className='search-list flex'>
                                        <div><label>No</label><p></p></div>
                                        <div><label>신청일자</label><p></p></div>
                                        <div><label>회사</label><p></p></div>
                                        <div><label>이름</label><p></p></div>
                                        <div><label>방문일자</label><p></p></div>
                                        <div><label>인솔자 정보</label><p></p></div>
                                        <div><label>방문</label><p></p></div>
                                        <div><label>주차</label><p></p></div>
                                    </div>
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