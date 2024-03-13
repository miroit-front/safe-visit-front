import { useState } from 'react';
import './SearchDetailModal.css'


function SearchDetailModal({setShowModal}){
    const [detailApplyData, setDetailApplyData] = useState([]);
    const closeModal = () => {
        setShowModal(false);
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
            <header><button onClick={closeModal}>X</button></header>
           <div>대 충 내 용</div>
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
            
                    <button type='submit' onClick={closeModal}>확인</button>
        </div>
    )
}

export default SearchDetailModal;