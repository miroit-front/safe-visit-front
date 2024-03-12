import './NoticeListModal.css';

function NoticeListModal({closeModal}){
    return(
        <div id='modal'>
            <div className='modal_bg'></div>
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
                                    <div className='view_tit'>방문자 등록 안내방문자 등록 안내방문자 등록 안내방문자 등록 안내</div>
                                    <ul>
                                        <li>2024.03.11</li>
                                        <li>관리자</li>
                                    </ul>
                                </div>
                            </section>
                            <main className='main-content'>
                                방문자 등록 안내 내용입니다.<br />
                                방문자 등록 안내 내용입니다.<br />
                                방문자 등록 안내 내용입니다.<br />
                                방문자 등록 안내 내용입니다.<br />
                                방문자 등록 안내 내용입니다.<br />
                                방문자 등록 안내 내용입니다.<br />
                                방문자 등록 안내 내용입니다.<br />
                                방문자 등록 안내 내용입니다.<br />
                                방문자 등록 안내 내용입니다.<br />
                                방문자 등록 안내 내용입니다.<br />

                            </main>
                            <section className='notice-list'>
                                <ul>
                                    <li className='prev_view'><span>이전글</span><span className='list_tit'>공지사항1</span></li>
                                    <li className='next_view'><span>다음글</span><span className='list_tit'>공지사항3</span></li>
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