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
            <section className='notice-part'>
                <div className="basic_table">
                        <div className="table-row table-header">
                            <div className="table-cell table_num">No</div>
                            <div className="table-cell table_tit">제목</div>
                            <div className="table-cell table_date">작성일</div>
                            <div className="table-cell table_name">작성자</div>
                        </div>
                        <div>
                            <div className="table-row notice_important">
                                <div className="table-cell table_num"><span className='notice_tag'>공지</span></div>
                                <div className="table-cell table_tit" onClick={showListModal}>제목입니다</div>
                                <div className="table-cell table_date">2024.03.11</div>
                                <div className="table-cell table_name">관리자</div>
                            </div>
                        </div>
                        <div>
                            <div className="table-row">
                                <div className="table-cell table_num">00</div>
                                <div className="table-cell table_tit" onClick={showListModal}>제목입니다</div>
                                <div className="table-cell table_date">2024.03.11</div>
                                <div className="table-cell table_name">관리자</div>
                            </div>
                        </div>
                </div>
                {isOpen && <NoticeModal closeModal={closeModal}/>}    
            </section>
            <nav className='pagination_wrap'>
                <div className='prev_btn_wrap'>
                    <ul>
                        <li><a href='#' className='btn_prev_faster' title='맨 앞으로 이동'></a></li>
                        <li><a href='#' className='btn_prev' title='이전 페이지'></a></li>
                    </ul>
                </div>
                <div className='num_wrap'>
                    <ul className='num_list'>
                        <li className='page_num'><a href='#' className='pagination clicked'>1</a></li>
                        <li className='page_num'><a href='#' className='pagination active'>2</a></li>
                        <li className='page_num'><a href='#' className='pagination'>3</a></li>
                    </ul>
                </div>
                <div className='next_btn_wrap'>
                    <ul>
                        <li><a href='#' className='btn_next' title='다음 페이지'></a></li>
                        <li><a href='#' className='btn_next_faster' title='맨 뒤로 이동'></a></li>
                    </ul>
                </div>
            </nav>
        </form>
    )
}
export default Notice;