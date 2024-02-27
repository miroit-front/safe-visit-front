import { useRef } from "react";
import './ExcelModal.css';

function ExcelModal({onFileUpload, closeModal}){
    const fileInputRef = useRef(null);
    const uploadBtnClick = (event) => {
        event.preventDefault();
        fileInputRef.current.click(); //파일업로드 창을 여는 이벤트 발생
    };
    const fileChange=(event)=>{
            const file = event.target.files[0]
            onFileUpload(file); // 올라온 파일 부모컨포넌트로 전달
        }
    return(
        <div className="ExcelModal-container">
            <span>엑셀을 업로드하여 다수의 방문자를 등록할 수 있습니다.</span><br/>
            <span>아래 양식을 다운로드하여 입력 후 업로드 하시기 바랍니다.</span><br/>
            <span>(최대 00명)</span><br/>
            <button className="download-btn">양식 다운로드</button>
            <div>
                <input type="file" accept=".xlsx, .xls" ref={fileInputRef} onChange={fileChange}/>
                <button type='upload' className='upload-btn' onClick={uploadBtnClick} style={{display:'none'}}>파일선택</button>
            </div>
            <div className="modal-footer-btn">
                <button type='submit'>저장</button>
                <button onClick={closeModal}>취소</button>
            </div>
        </div>
    )
}

export default ExcelModal;