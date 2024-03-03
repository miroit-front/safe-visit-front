import { useState } from "react";
import ExcelMoal from "./ExcelModal";

function ExcelUploadBtn(){
    const [showModal, setShowModal] = useState(false);
    const uploadBtnClick = ()=>{
        
        setShowModal(true);
    }
    const closeModal = ()=>{
        setShowModal(false);
    }

    const onFileUpload = (file) => {
        // 업로드된 파일에 대한 처리를 수행합니다.
        console.log('Uploaded file:', file);
      };
    return(
        <div >
            <button type='upload' className='upload-btn' onClick={uploadBtnClick}>+ 엑셀 업로드</button>
            {showModal && <ExcelMoal onFileUpload={onFileUpload} closeModal={closeModal}/>}
        </div>
    )
}

export default ExcelUploadBtn;