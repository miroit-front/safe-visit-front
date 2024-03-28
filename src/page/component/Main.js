import './Main.css';
import { useNotices } from '../context/NoticeProvider';
import { useEffect } from 'react';

function Main(){
    const { notices, setIsOpen, setSelectedNotice, showListModal, searchNoticeLists } = useNotices();

    const handleNoticeClick = (e, index) => {
        e.preventDefault(); //  a태그 기본동작 방지
        e.stopPropagation(); // 이벤트 전파 방지
        showListModal(index);
    }
    useEffect(() => {
        console.log("notices : ",notices);
      }, notices, searchNoticeLists);
    return(
        <div id='main_wrap'>
            <div className='main_bg'>
                <div className='main_title'>
                    <p className='m_tit'>대한항공<span>방문 예약 시스템</span></p>
                    <p>방문 예약 시스템으로 편리하게 방문 신청하세요.</p>
                </div>
            </div>
            <div id='main-container'>
                <article className='main-article'>
                    <div className='main_conwrap'>
                        <button className='apply-btn' onClick={(e)=>{window.location.href = '/apply'}}>
                            <p>방문 신청</p>
                            <span>바로가기</span>
                        </button>
                        <button className='search-btn' onClick={(e)=>{window.location.href='/search'}}>
                            <p>방문 조회</p>
                            <span>바로가기</span>
                        </button>
                        <section className='main-notice'>
                            <header>
                                <h3>공지사항</h3>
                                <button onClick={(e)=>{window.location.href = './notice'}}><img src='../img/arrow_right.svg' alt='공지사항 바로가기'/></button>
                            </header>
                            <ul>
                                {notices.slice(0, 4).map((item,i) =>
                                <li key={i} onClick={(e)=>handleNoticeClick(e, i)}>
                                    <a href='#!' className='main-notice_link'>
                                        <p>{item.title}</p>
                                        <p>{item.createDt}</p>
                                    </a>
                                </li>
                            )}
                            </ul>
                            
                        </section>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Main;