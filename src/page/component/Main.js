import './Main.css';
import { useState } from 'react';

function Main(){
    const [noticeContext] = useState(['방문 예약 시스템','방문 예약 시스템 점검 안내','단체방문 예약시 주의사항']);
    const [noticeCal]= useState(['2023-10-27','2023-10-27','2023-10-27']);
    return(
        <>
            <div className="main-img"></div>
        <div id='main-container'>
                <article className='main-article'>
                        <button className='apply-btn' onClick={(e)=>{
                            window.location.href = '/apply'
                        }}>방문신청</button>
                        <button className='search-btn' onClick={(e)=>{
                            window.location.href='/search'
                        }}>방문조회</button>
                    <section className='main-notice'>
                        <header>
                            <h3>공지사항</h3>
                            <button>+</button>
                        </header>
                        <ul>
                            {noticeContext.map((item,i) =>
                                <li key={i}>
                                    <p>{item}</p>
                                    <p>{noticeCal[i]}</p>
                                </li>
                            )}
                            
                        </ul>
                    </section>
                </article>
        </div>
        </>
    )
}

export default Main;