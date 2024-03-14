import axios from "axios";

export const sendResForVisit = async() => {
    return await axios.post('http://123.143.44.130:8084/visit-reservation/save')
}

export const sendResForVisitList = async() => {
    return await axios.get('http://123.143.44.130:8084/visit-reservation-hist/get-list')
}

export const sendResForVisitListDetail = async() => {
    return await axios.get('http://123.143.44.130:8084/visit-reservation-hist/get-list/1')
}