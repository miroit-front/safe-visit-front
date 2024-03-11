import './NoticeListModal.css';

function NoticeListModal({closeModal}){
    return(
        <div className='noticeModal-container'>
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
                    방문자 등록 안내 내용입니다.
                </main>
                <section className='notice-list'>
                    <ul>
                        <li><span className='lists'>이전글</span><span>공지사항1</span></li>
                        <li><span className='lists'>다음글</span><span>공지사항3</span></li>
                    </ul>
                </section>
            </body>
            <footer className='notice-footer'>
                <button type='button' onClick={closeModal}>목록으로</button>
            </footer>
        </div>
    )
}
export default NoticeListModal;