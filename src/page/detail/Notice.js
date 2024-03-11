import { useState } from 'react';
import './Notice.css';
import NoticeModal from './modal/NoticeListModal';

function Notice(){
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = ()=>{
        setIsOpen(false);
    }
    const showListModal = ()=>{
        setIsOpen(true);
    }
    return(
        <form action="#">
            <section className='notice-search-part flex'>
                <div className='flex'>
                    <div className="selectBox">
                        <select className="selectBtn">선택
                            <option value="title">제목</option>
                            <option className="content">내용</option>
                        </select>
                    </div>
                    <input type='text'/>
                </div>
                <button type='submit' value="Submit" className='btn_notice_search'>조회</button>
            </section>
            <section>
                <div>
                    <div className="basic_table">
                        <div className="table-row table-header">
                            <div className="table-cell table_num">No</div>
                            <div className="table-cell table_tit">제목</div>
                            <div className="table-cell table_date">작성일</div>
                            <div className="table-cell table_name">작성자</div>
                        </div>
                        <div>
                            <div className="table-row">
                                <div className="table-cell table_num">00</div>
                                <div className="table-cell table_tit" onClick={showListModal}>제목입니다</div>
                                <div className="table-cell table_date">2024.03.11</div>
                                <div className="table-cell table_name">김대한</div>
                            </div>
                        </div>
                    </div>
                </div>    
            </section>
            <section className='notice-part'>
                <div className='flex layout'>
                    <div className='notice-list-result width100'>
                        <div className='notice-list lists flex'>
                            <div><label>No</label><p>dd</p></div>
                            <div><label>제목</label><p onClick={showListModal}>dd</p></div>
                            <div><label>작성일</label><p>dd</p></div>
                            <div><label>작성자</label><p>dd</p></div>
                        </div>
                    </div>
                </div>
                {isOpen && <NoticeModal closeModal={closeModal}/>}
            </section>
        </form>
    )
}
export default Notice;