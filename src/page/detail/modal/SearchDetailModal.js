import { useState } from 'react';
import './SearchDetailModal.css'


function SearchDetailModal({setShowModal}){
    const [detailApplyData, setDetailApplyData] = useState([]);
    const closeModal = () => {
        setShowModal(false);
        document.body.style.overflow = "auto";
    }

    // function searchDetailRes(){
    //     const apiUrl_detail = `visit-reservation-hist/get-list/${id}?page=0&size=20`;
    //     console.log(apiUrl_detail);

    //     axios.get(apiUrl_detail)
    //         .then(res =>{
    //             console.log(res.data);
    //             setDetailApplyData(res.data.content);
                
    //             const newDetailData = res.data.content.map(data=>({
    //                 companyName : data.companyName,
                    
    //             }))
    //         })
    // }
    return(
        <div className='search-modal'>
            <div className='modal_bg' onClick={closeModal}></div>
            <div className='modal_wrap noticeModal-container'>
                <div className='modal_center'>
                    <div className='modalcon_wrap'>
                        <header>
                            <p>추가 방문자 정보</p>
                            <button type='button' onClick={closeModal}><img src='./img/ico_close.svg' alt='닫기'/></button>
                        </header>
                        <body>
                            <div className="basic_table">
                                <div className="table-tit">
                                    <div className='info_wrap'>
                                        <ul>
                                            <li>회사명/생년월일</li>
                                            <li>직책/전화번호</li>
                                            <li>성명/차량번호</li>
                                            <li>이메일/주소</li>
                                        </ul>
                                    </div>
                                    <div className='pakingbox'>주차승인</div>
                                </div>
                                <div>{/* 이부분 반복 */}
                                    <div className='info_wrap'>
                                        <ul>
                                            <li>미로아이티</li>
                                            <li>대리</li>
                                            <li>이나다</li>
                                            <li>naea.lee@miroit.com</li>
                                        </ul>
                                        <ul>
                                            <li>2001.01.01</li>
                                            <li>010-1111-1111</li>
                                            <li>123가4567</li>
                                            <li>서울시 강남구 역삼동 000000000</li>
                                        </ul>
                                    </div>
                                    <div className='pakingbox'><span className='tag_done'>승인완료</span></div>{/* tag_wait 승인대기 */}
                                </div>
                                <div>{/* 이부분 반복 */}
                                    <div className='info_wrap'>
                                        <ul>
                                            <li>미로아이티</li>
                                            <li>대리</li>
                                            <li>이나다</li>
                                            <li>naea.lee@miroit.com</li>
                                        </ul>
                                        <ul>
                                            <li>2001.01.01</li>
                                            <li>010-1111-1111</li>
                                            <li>123가4567</li>
                                            <li>서울시 강남구 역삼동 000000000</li>
                                        </ul>
                                    </div>
                                    <div className='pakingbox'><span className='tag_done'>승인완료</span></div>
                                </div>
                                <div>{/* 이부분 반복 */}
                                    <div className='info_wrap'>
                                        <ul>
                                            <li>미로아이티</li>
                                            <li>대리</li>
                                            <li>이나다</li>
                                            <li>naea.lee@miroit.com</li>
                                        </ul>
                                        <ul>
                                            <li>2001.01.01</li>
                                            <li>010-1111-1111</li>
                                            <li>123가4567</li>
                                            <li>서울시 강남구 역삼동 000000000</li>
                                        </ul>
                                    </div>
                                    <div className='pakingbox'><span className='tag_done'>승인완료</span></div>
                                </div>
                                <div>{/* 이부분 반복 */}
                                    <div className='info_wrap'>
                                        <ul>
                                            <li>미로아이티</li>
                                            <li>대리</li>
                                            <li>이나다</li>
                                            <li>naea.lee@miroit.com</li>
                                        </ul>
                                        <ul>
                                            <li>2001.01.01</li>
                                            <li>010-1111-1111</li>
                                            <li>123가4567</li>
                                            <li>서울시 강남구 역삼동 000000000</li>
                                        </ul>
                                    </div>
                                    <div className='pakingbox'><span className='tag_done'>승인완료</span></div>
                                </div>
                                <div>{/* 이부분 반복 */}
                                    <div className='info_wrap'>
                                        <ul>
                                            <li>미로아이티</li>
                                            <li>대리</li>
                                            <li>이나다</li>
                                            <li>naea.lee@miroit.com</li>
                                        </ul>
                                        <ul>
                                            <li>2001.01.01</li>
                                            <li>010-1111-1111</li>
                                            <li>123가4567</li>
                                            <li>서울시 강남구 역삼동 000000000</li>
                                        </ul>
                                    </div>
                                    <div className='pakingbox'><span className='tag_done'>승인완료</span></div>
                                </div>
                            </div>
                        </body>
                        <footer className='notice-footer'>
                                <button type='button' onClick={closeModal}>확인</button>
                        </footer>
                    </div>            
                </div>
            </div>
        </div>
    )
}
{/* <div className='search-list-result width100'>
                                            {detailApplyData.map((data, i)=>(
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
                        </div> */}
export default SearchDetailModal;