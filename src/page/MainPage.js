
import Header from './component/layout/Header';
import Main from './component/Main';
import Footer from './component/layout/Footer';
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import { sendApply } from './api';

function MainPage(){
    const [result, setResult] = useState({
        state : false,
        data : {}
    })

    // useEffect(() => {
    //     getData()
    // }, [])

    const getData = async () => {
        const ret = sendApply()
        if (ret.status === 200) {
            setValue(ret.data.name)
            setResult({state : true, data : ret.data})
        } else {
            setResult({state : false, data : {}})
        }
        console.log(ret)
    }

    const [value, setValue] = useState("")

    return(
        <div>
            {result.state ? <p>{result.data.escortEmployeeName}
            
        
            <input 
            type="text"
            value={result.data.area}
            />
            </p> : <p>실패</p>}


            <Main/>

            <button onClick={() => getData()}>확인</button>
           
        </div>
    )
}

export default MainPage;