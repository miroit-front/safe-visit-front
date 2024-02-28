import './NoticeListModal.css';

function NoticeListModal({closeModal}){
    return(
        <div className='noticeModal-container'>
            <header>
            
                <span>공지사항</span>
                <button type='button' onClick={closeModal}>X</button>
            </header>
            <body>
            <section className="main-header">
                    <h4>공지사항</h4>
                    <div className='notice-info'>
                        <div><p>작성자</p><p>admin</p></div>
                        <div><p>방문자 등록 안내</p></div>
                        <div><p>작성일</p><p>2021-01-01</p></div>
                        </div>
            </section>
            <main className='main-content'>
                    어쩌고저쩌고 내용들어감

            </main>
                <section className='upload-file'>
                    <p>첨부파일</p>
                    <p>파일이름</p>
                    <button>다운로드</button>
                </section>
                <section className='notice-list'>
                    <ul>
                        <li><span className='lists'>이전글</span><span>글제목어쩌고저쩌고</span></li>
                        <li><span className='lists'>다음글</span><span>글제먹어쩌고저쩌고</span></li>
                    </ul>
                </section>
            </body>
            <footer className='notice-footer'>
                <button type='button' onClick={closeModal}>닫기</button>
            </footer>
        </div>
    )
}
export default NoticeListModal;