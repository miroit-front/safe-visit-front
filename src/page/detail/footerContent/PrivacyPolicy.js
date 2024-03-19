import React, { useState, useRef, useEffect } from 'react';
import TabLayout from "../../component/layout/TabLayout";
import Policycon01 from "./Policycon01";
import Policycon02 from "./Policycon02";

function PrivacyPolicy(){

    const [menu, setMenu] = useState(['개인정보처리방침 2023.10.31', '개인정보처리방침 0000.00.00']);
    const [selectedOption, setSelectedOption] = useState('개인정보처리방침 2023.10.31');
    const [showMenu, setShowMenu] = useState(false);
    const selectBoxRef = useRef(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
        setShowMenu(false); // 옵션 선택 후 메뉴를 닫음
    }

    const handleSelectBoxToggle = () => {
        setShowMenu(!showMenu); // 옵션 선택 상자를 열거나 닫음
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (selectBoxRef.current && !selectBoxRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectBoxRef]);

    return(
        <div className="inner">
            <TabLayout/>
            <div className="footercon_tit privacy_box">
                <div>
                    <h3>개인정보처리방침</h3>
                    <p>대한항공 방문 예약 시스템은 개인정보보호법률을 준수하고 있습니다.</p>
                </div>
                <div className='selectwrap' ref={selectBoxRef}>
                    <div className={`select-box ${showMenu ? 'open' : ''}`} onClick={handleSelectBoxToggle}>
                        {selectedOption}
                    </div>
                    {showMenu && (
                        <div className="select-options">
                            {menu.map((item, index) => (
                                <div key={index} className={`option-item ${item === selectedOption ? 'select' : ''}`}
                                    onClick={() => handleSelect(item)}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="footercon_wrap">
                {selectedOption === '개인정보처리방침 2023.10.31' && <Policycon02 />}
                {selectedOption === '개인정보처리방침 0000.00.00' && <Policycon01 />}
            </div>
        </div>
    )
}

export default PrivacyPolicy;
