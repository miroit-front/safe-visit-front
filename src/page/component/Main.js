import './Main.css';
import { useState } from 'react';

function Main(){
    const [noticeContext] = useState(['방문 예약 시스템','방문 예약 시스템 점검 안내','단체방문 예약시 주의사항','단체방문 예약시 주의사항']);
    const [noticeCal]= useState(['2023.10.27','2023.10.27','2023.10.27','2023.10.27']);
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
                                {noticeContext.map((item,i) =>
                                <li key={i}>
                                    <a href='/' className='main-notice_link'>
                                        <p>{item}</p>
                                        <p>{noticeCal[i]}</p>
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