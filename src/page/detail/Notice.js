import './Notice.css';

function Notice(){
    return(
        <form action="#">
        <h2>공지사항</h2>
        <section className='notice-search-parth flex'>
            <div className='flex'>
                <div className="selectBox">
                    <select className="selectBtn">선택
                        <option value="title">제목</option>
                        <option className="content">내용</option>
                    </select>
                </div>
                <input type='text'/>
            </div>
            <button type='submit' value="Submit">조회</button>
        </section>
        <section className='notice-part'>
                        <div className='flex width100 layout'>
                            <div className='notice-list-result width100'>
                                    <div className='notice-list lists flex width100'>
                                        <div><label>No</label><p></p></div>
                                        <div><label>제목</label><p></p></div>
                                        <div><label>작성일</label><p></p></div>
                                        <div><label>작성자</label><p></p></div>
                                    </div>
                            </div>
                        </div>
                    </section>
        </form>
    )
}
export default Notice;