import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from 'date-fns/locale/ko';
import "./ApplyDate.css";
import "react-datepicker/dist/react-datepicker.css";
import { subDays, getYear, getMonth } from "date-fns";
const _ = require('lodash');

registerLocale('ko', ko); 

function ApplyDate() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedRadio, setSelectedRadio] = useState(null);


    const years = _.range(1990, new Date().getFullYear() + 1, 1);
    const months = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
    ];

    useEffect(() => {
    setSelectedDate(startDate);
    }, [startDate, setSelectedDate]); // 1일 2일 라디오 선택 관련

    // 1일 또는 2일 라디오 버튼 선택 시 end date 계산
    const checkOneDay = (e) => {
        const value = e.target.value;
        if (value === "1day") {
          setEndDate(new Date(startDate.getTime() + 1 * 24 * 60 * 60 * 1000)); // 1일 후 날짜 설정
        } else if (value === "2day") {
          setEndDate(new Date(startDate.getTime() + 2 * 24 * 60 * 60 * 1000)); // 2일 후 날짜 설정
        }
        setSelectedRadio(value); // 선택된 라디오 버튼 상태 업데이트
      };
    
      // 시작 날짜 변경 시 종료 날짜 초기화 및 선택된 라디오 버튼 해제
      const handleStartDateChange = (date) => {
        setStartDate(date);
        setEndDate(date);
        setSelectedRadio(null);
      };

      const handleEndDateChange = (date) => {
        setEndDate(date);
        setSelectedRadio(null); // 종료 날짜 변경 시 라디오 버튼 해제
      };

  return (
    <div className="date_wrap">
        <DatePicker
        renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="date-customheader">
              <button type="button" onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className="month_prev"></button>
              <div className="custom-month">{date.getFullYear()}년 {months[date.getMonth()]}월</div>
              <button type="button" onClick={increaseMonth} disabled={nextMonthButtonDisabled} className="month_next"></button>
            </div>
          )}
        selected={startDate}
        onChange={(date) => handleStartDateChange(date)}
        popperPlacement="bottom-end"
        showTimeSelect
        minDate={subDays(new Date(), 0)} //오늘의 이전 날짜는 선택 못하게
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="time"
        dateFormat="yyyy년 MM월 dd일 aa h:mm"
        locale="ko"
        showPopperArrow={false}
        className="custom-datepicker" 
        />
        <span>~</span>
        <DatePicker
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="date-customheader">
            <button type="button" onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className="month_prev"></button>
            <div className="custom-month">{date.getFullYear()}년 {months[date.getMonth()]}월</div>
            <button type="button" onClick={increaseMonth} disabled={nextMonthButtonDisabled} className="month_next"></button>
          </div>
        )}
        selected={endDate}
        onChange={(date) => handleEndDateChange(date)}
        popperPlacement="bottom-end"
        showTimeSelect
        minDate={startDate}
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="time"
        dateFormat="yyyy년 MM월 dd일 aa h:mm"
        locale="ko"
        showPopperArrow={false}
        className="custom-datepicker"
        />
        <div className='day radio_bl'>
            <input type="radio" id="oneDay" name="day" value="1day" checked={selectedRadio === "1day"} onChange={(e) => checkOneDay(e)}/>
            <label htmlFor="oneDay">1일</label>
            <input type="radio" id="twoDay" name="day" value="2day" checked={selectedRadio === "2day"} onChange={(e) => checkOneDay(e)}/>
            <label htmlFor="twoDay">2일</label>
        </div>
    </div>
  );
}
export default ApplyDate;
