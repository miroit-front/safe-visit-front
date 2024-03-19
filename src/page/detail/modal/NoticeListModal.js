import './NoticeListModal.css';
import { useNotices } from '../../component/page/NoticeContext';
import React, { useState } from 'react';

function NoticeListModal(){
    const { isOpen, closeModal, selectedNotice, setSelectedNotice,  handlePrevNext, currentNoticeIndex, noticeTitle } = useNotices();


    if(!isOpen || !selectedNotice){ //이게 없어서 닫히지 않았던 것이다. 모달이 열려있지 않거나, 선택된 공지사항이 없으면 아무것도 표시하지 않음
        return null;
    }


     // 선택된 공지사항이 없는 경우를 대비한 처리
     if (!selectedNotice) {
        return (
            <div id='modal'>
                <div className='modal_bg' onClick={closeModal}></div>
                <div className='modal_wrap noticeModal-container'>
                    <div className='modal_center'>
                        <div className='modalcon_wrap'>
                            <header>
                                <button type='button' onClick={closeModal}><img src='./img/ico_close.svg' alt='닫기'/></button>
                            </header>
                            <main className='main-content'>
                                공지사항이 선택되지 않았습니다.
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    // 선택된 공지사항의 상세 정보를 표시
    return(
        <div id='modal'>
            <div className='modal_bg' onClick={closeModal}></div>
            <div className='modal_wrap noticeModal-container'>
                <div className='modal_center'>
                    <div className='modalcon_wrap'>
                        <header>
                            <button type='button' onClick={closeModal}><img src='./img/ico_close.svg' alt='닫기'/></button>
                        </header>
                        
                        <body>
                            <section className="main-header"> 
                                <div className='notice-info'>
                                    <div className='noticeview_tag'>공지</div>
                                    <div className='view_tit'>{selectedNotice.title}</div>
                                    <ul>
                                        <li>{selectedNotice.date}</li>
                                        <li>{selectedNotice.writer}</li>
                                    </ul>
                                </div>
                            </section>
                            <main className='main-content'>
                                {selectedNotice.body}<br />
                            </main>
                          
                            <section className='notice-list'>
                                <ul>
                                    {currentNoticeIndex > 0 && (
                                        <li onClick={() => handlePrevNext('prev')} className='prev_view'>
                                            <span>이전글</span>
                                            <span className='list_tit'>{noticeTitle[currentNoticeIndex-1]}</span>
                                        </li>
                                    )}
                                    {currentNoticeIndex < noticeTitle.length -1 && (
                                        <li onClick={() => handlePrevNext('next')} className='next_view'>
                                            <span>다음글</span>
                                            <span className='list_tit'>{noticeTitle[currentNoticeIndex+1]}</span>
                                        </li>
                                    )}
                                    
                                </ul>
                            </section>
                          
                        </body>
             
                        <footer className='notice-footer'>
                            <button type='button' onClick={closeModal}>목록으로</button>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NoticeListModal;