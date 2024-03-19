import React, { createContext, useState, useContext } from 'react';

const NoticeContext = createContext();
export const useNotices = () => useContext(NoticeContext);

export const NoticeProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = ()=>{
        console.log('닫기')
        setIsOpen(false);
        document.body.style.overflow = "auto";
    }
    const [noticeTitle, setNoticeTitle] = useState(['방문 예약 시스템', '방문 예약 시스템 점검 안내', '단체방문 예약시 주의사항', '단체방문 예약시 주의사항']);
    const [noticeCal, setNoticeCal] = useState(['2023.10.30', '2024.01.27', '2024.03.27', '2024.04.27']);
    const [noticeWriter, setNoticeWriter] = useState(['관리자1', '관리자2', '관리자3','관리자4']);
    const [noticeBody, setNoticeBody] = useState(['방문자 등록 안내 내용입니다.', '내용1','내용2','내용3']);
    const [selectedNotice, setSelectedNotice] = useState(''); //공지사항 제목 클릭했을 때 모달에 뜰 상세내용
    const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0); //현재글 index

    const showListModal = (index) => { //모달 열고 현재 공지의 인덱스를 수정하는 함수
        const noticeInfo = {
            title : noticeTitle[index],
            date : noticeCal[index],
            writer : noticeWriter[index],
            body : noticeBody[index],
        }
        setSelectedNotice(noticeInfo);
        setCurrentNoticeIndex(index);
        console.log(noticeInfo);
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    }

    
    const handlePrevNext = (direction)  => { //이전글, 다음글 이동하는 함수
        const newIndex = currentNoticeIndex + (direction === 'prev' ? -1 : 1); //현재 index + 방향에 따라서 -1, +1 
        if(newIndex >= 0 && newIndex < noticeTitle.length){
            setCurrentNoticeIndex(newIndex);
            const nextNoticeInfo = {
                title : noticeTitle[newIndex],
                date : noticeCal[newIndex],
                writer : noticeWriter[newIndex],
                body : noticeBody[newIndex],
            }
        setSelectedNotice(nextNoticeInfo);
        console.log(nextNoticeInfo);
    }else{
        console.log('다음 글이 없습니다');
    }
};
    return (
        <NoticeContext.Provider value={{isOpen, setIsOpen, closeModal, selectedNotice, setSelectedNotice, noticeTitle, 
        setNoticeTitle, noticeCal, setNoticeCal, noticeWriter, setNoticeWriter, noticeBody, setNoticeBody, showListModal,
        handlePrevNext, currentNoticeIndex }}>
            {children}
        </NoticeContext.Provider>
    );
};
export default NoticeProvider;