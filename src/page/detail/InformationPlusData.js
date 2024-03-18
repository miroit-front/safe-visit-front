function InformationPlusData  ({ id, onDelete, checkOneNationality, checkedNationality }){
    return (
        <form>
            <div className='form_wrap'>
                        <ul>
                            <li><label>회사명</label><input type='text' placeholder='회사명을 입력해주세요' title='회사명'/></li>
                            <li><label>성명</label>
                                <input type='text' placeholder='성명을 입력해주세요' title='성명'/>
                                <div className='nationality flex'>
                                    <input type="radio" id="domestic" name="nationality" value="내국인" 
                                        onChange={(e)=>checkOneNationality(e)}/><span>내국인</span>
                                    <input type="radio" id="foreigner" name="nationality" value="외국인" 
                                        onChange={(e)=>checkOneNationality(e)}/><span>외국인</span>
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li><label>직책</label><input type='text' placeholder='직책을 입력해주세요' title='직책'/></li>
                            <li>
                                <label>전화번호</label>
                                <input type='number' placeholder='숫자만 입력해주세요(-생략)' title='전화번호'/>
                            </li>
                        </ul>
                        <ul>
                            <li><label>생년월일</label><input type='text' placeholder='숫자 8자리 입력해주세요 YYYYMMDD' title='생년월일'/></li>
                            <li><label>이메일</label><input type='text' placeholder='이메일을 입력해주세요' title='이메일'/></li>
                        </ul>
                        <ul>
                            <li><label>차량번호</label><input type='text' placeholder='빈칸없이 입력해주세요' title='차량번호'/></li>
                            <li><label>주소</label><input type='text' className='l_input' placeholder='방산구역 방문자만 입력해주세요' title='주소'/></li>
                        </ul>
            </div>
            <div className='form_delete'><button type="button" onClick={() => onDelete(id)}>삭제</button></div>
        </form>
    );
};

export default InformationPlusData;