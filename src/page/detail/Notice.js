import { useState } from 'react';
import './Notice.css';
import NoticeListModal from './modal/NoticeListModal';
import { useNotices } from '../context/NoticeProvider';

function Notice(){
    const {isOpen, setIsOpen, noticeTitle, noticeCal, noticeWriter, showListModal} = useNotices();
    const [isExpand, setIsExpand] = useState(false); //옵션열고 닫는 state
    const [selected, setSelected] = useState("key01"); //옵션 기본값 state
    const [searchTerm, setSearchTerm] = useState(""); //검색할 단어

    function noticeSearchBtn (){

    }
    function CustomSelect({isExpand, setIsExpand, selected, setSelected}) {

        const optionData = [
            { optionKey: "key01", optionName: "제목" },
            { optionKey: "key02", optionName: "내용" }
        ];

        const handleKeydown = (e) => {
            if (e.KeyCode === 38 || e.KeyCode === 40 || e.keyCode === 13) {
                e.preventDefault();
            }

            if (e.keyCode === 38 || e.keyCode === 40) {
                setIsExpand(() => true);
                setSelected((prev) => {
                    const newIdx = () => {
                        const oldIdx = optionData.findIndex(
                            (option) => option.optionKey === prev
                        );
                        if (e.keyCode === 38) {
                            return oldIdx === 0 ? oldIdx : oldIdx - 1;
                        }
                        if (e.keyCode === 40) {
                            return oldIdx === optionData.length - 1 ? oldIdx : oldIdx + 1;
                        }
                    };

                    return optionData[newIdx()].optionKey;
                });
            }
            if (e.keyCode === 13) {
                setIsExpand((prev) => !prev);
            }
        };

        const handleMouseDown = (e) => {
            e.preventDefault();

            if (e.target.matches(":focus")) {
                setIsExpand((prev) => !prev);
            } else {
                e.target.focus();
                setIsExpand(() => true);
            }
        };

        const handleWrapperBlur = () => {
            setIsExpand(false);
        };

        return (
            <div className="select_wrap" onBlur={handleWrapperBlur}
                onKeyDown={(e) => handleKeydown(e)} onMouseDown={(e) => handleMouseDown(e)} tabIndex={0}>
                <div>
                    <span className={`arrow ${isExpand ? "is-expanded" : ""}`}></span>
                    <select name="select" value={selected} onChange={(e) => setSelected(e.target.value)}>
                        {optionData.length > 0 && optionData.map(({ optionKey, optionName }) => (
                            <option key={optionKey} value={optionKey}>
                                {optionName}
                            </option>
                        ))}
                    </select>
                </div>
                {isExpand && (
                    <ul>
                        {optionData.length > 0 && optionData.map(({ optionKey, optionName }) => (
                            <li key={optionKey}>
                                <button buttonid={optionKey} type="button"  onClick={() => { setSelected(optionKey); setIsExpand(false);}}
                                    className={selected === optionKey ? "selected" : ""}>
                                    {optionName}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    } 


    return(
        <form action="#">
            <section className='notice-search-part'>
                <div className='selectBox_wrap'>
                    <CustomSelect isExpand={isExpand} setIsExpand={setIsExpand} selected={selected} setSelected={selected} />
                    {/*<div className="selectBox">
                        <select className="selectBtn">선택
                            <option value="title">제목</option>
                            <option className="content">내용</option>
                        </select>
                    </div>*/}
                    <input type='search' placeholder="검색어를 입력해주세요" title='검색어를 입력해주세요'/>
                </div>
                <button type='submit' value="Submit" onClick={noticeSearchBtn} className='btn_notice_search'>조회</button>
            </section>
            <section className='notice-part'>
                <div className="basic_table">
                        <div className="table-row table-header">
                            <div className="table-cell table_num">No</div>
                            <div className="table-cell table_tit">제목</div>
                            <div className="table-cell table_date">작성일</div>
                            <div className="table-cell table_name">작성자</div>
                        </div>
                        <div className='table-body'>
                            <div className="table-row notice_important">
                                <div className="table-cell table_num"><span className='notice_tag'>공지</span></div>
                                <div className="table-cell table_tit" onClick={()=>showListModal()}>제목입니다</div>
                                <div className="table-cell table_date">2024.03.11</div>
                                <div className="table-cell table_name">관리자</div>
                            </div>
                        </div>
                        {noticeTitle.map((item,i) =>
                       <div className='table-body'>
                            <div className="table-row">
                            <div className="table-cell table_num">{i+1}</div>
                                <div className="table-cell table_tit" onClick={()=>showListModal(i)}>{item}</div>
                                <div className="table-cell table_date">{noticeCal[i]}</div>
                                <div className="table-cell table_name">{noticeWriter[i]}</div>
                            </div>
                        </div>
                         )}
                </div>
            </section>
            <nav className='pagination_wrap'>
                <div className='prev_btn_wrap'>
                    <ul>
                        <li><a href='.' className='btn_prev_faster' title='맨 앞으로 이동'></a></li>
                        <li><a href='.' className='btn_prev' title='이전 페이지'></a></li>
                    </ul>
                </div>
                <div className='num_wrap'>
                    <ul className='num_list'>
                        <li className='page_num'><a href='.' className='pagination clicked'>1</a></li>
                        <li className='page_num'><a href='.' className='pagination active'>2</a></li>
                        <li className='page_num'><a href='.' className='pagination'>3</a></li>
                    </ul>
                </div>
                <div className='next_btn_wrap'>
                    <ul>
                        <li><a href='.' className='btn_next' title='다음 페이지'></a></li>
                        <li><a href='.' className='btn_next_faster' title='맨 뒤로 이동'></a></li>
                    </ul>
                </div>
            </nav>
            {isOpen && <NoticeListModal/>}    
        </form>
    )
}
export default Notice;