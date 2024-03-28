import axios from 'axios';
import React, { createContext, useState, useContext, useEffect } from 'react';

const NoticeContext = createContext();
export const useNotices = () => useContext(NoticeContext);

export const NoticeProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = ()=>{
        console.log('닫기')
        setIsOpen(false);
        document.body.style.overflow = "auto";
    }
    const [notices, setNotices] = useState([]); //기본 notice 리스트 state
    const [noticeTitle, setNoticeTitle] = useState([]); //글제목 state
    const [noticeCal, setNoticeCal] = useState([]); // 글작성날짜 state
    const [noticeWriter, setNoticeWriter] = useState([]); //글작성자 state
    const [noticeBody, setNoticeBody] = useState([]); //글내용 state
    const [selectedNotice, setSelectedNotice] = useState(''); //공지사항 제목 클릭했을 때 모달에 뜰 상세내용
    const [currentNoticeIndex, setCurrentNoticeIndex] = useState([]); 

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

/*공지사항 목록 불러오는 api*/
async function searchNoticeLists(){
    const apiUrl_noticeList = '/notice/list?page=0&size=20&portalType=MEMBER';
    console.log("apiUrl_noticeList : ",apiUrl_noticeList);
    
    axios.get(apiUrl_noticeList)
    .then(res => {
        console.log(res);
        console.log(res.data.content);

        const newData = res.data.content.map(data => ({
            rowNum: data.rowNum,
            noticeId: data.noticeId,
            title: data.title,
            attachmentYn: data.attachmentYn,
            topYn: data.topYn,
            createDt: data.createDt,
            createUser: data.createUser,
            updateDt: data.updateDt,
            updateUser: data.updateUser,
        }));
        setNotices(newData);
        console.log("newData : ",newData);
    }).catch(err=>{
        console.log('api호출에러 : ', err.response? err.response.data.info : "unknown error");
        alert('데이터 가져오는 중 오류발생');
    })
    // try{
    //     const res = await axios.get(apiUrl_noticeList);
    //     console.log("res.data.content : ",res.data.content);

    //     const newData = res.data.content.map(data => ({
    //         rowNum: data.rowNum,
    //         noticeId: data.noticeId,
    //         title: data.title,
    //         attachmentYn: data.attachmentYn,
    //         topYn: data.topYn,
    //         createDt: data.createDt,
    //         createUser: data.createUser,
    //         updateDt: data.updateDt,
    //         updateUser: data.updateUser,
    //     }));
    //     setNotices(newData);
    //     console.log("newData : ",newData);
    // } catch (err) {
    //     console.log("error : ",err.data);
    //     // 여기에 에러 시 처리할 로직 추가 (예: 상태 업데이트, 사용자에게 알림 등)
    // }
};
    useEffect(()=>{ 
        searchNoticeLists();
        // NoticeProvider컴포넌트가 마운트되는 시점에 한 번만 searchNoticeLists함수 호출하도록 설정하여
        //NoticeProvider컴포넌트를 사용하는 모든 자식 컴포넌트들이 마운트될 때 공지사항 데이터도 이미 로드됨
    }, []);

    return (
        <NoticeContext.Provider value={{isOpen, setIsOpen, closeModal, selectedNotice, setSelectedNotice, noticeTitle, setNoticeTitle, noticeBody, setNoticeBody,
         noticeCal, setNoticeCal, noticeWriter, setNoticeWriter, noticeBody, setNoticeBody, showListModal, notices, setNotices,
        handlePrevNext, searchNoticeLists }}>
            {children}
        </NoticeContext.Provider>
    );
};
export default NoticeProvider;