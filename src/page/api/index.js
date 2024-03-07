import axios from "axios";

export const sendApply = async() => {
    return await axios.post('http://123.143.44.130:8084/visit-reservation/save')
}

export const sendNotice = async() => {
    return await axios.post('http://123.143.44.130:8084/notice/save')
}