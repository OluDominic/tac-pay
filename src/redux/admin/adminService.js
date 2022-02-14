import {APPCONFIG} from './../../config/config'
import axios from 'axios'

export const adminService = {
    getByID,
    studentDeposit,
    getTransactionHis,
    getDepHis,
    getAllTransHis,
    getAllPayHis,
    getAllStudents,
    registerStudent,
    updateUser,
    deleteUser
}

function getByID (id) {
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer lll`,
        "Access-Control-Allow-Origin":"*"
    }
    return axios.get(`${APPCONFIG.appapi}/fetchstudent/${id}`, {
        headers
    })
}

function studentDeposit(id, money, date, comment) {
    const headers = {
        "Content-Type": "application/json",
        Authorisation: `Bearer 111`,
        "Access-Control-Allow-Origin": "*",
        body: JSON.stringify()
    }
    return axios.post(`${APPCONFIG.appapi}/deposit`,{
        headers,
        id: id,
        money: money,
        date: date,
        comment: comment
    })
    .then(data=> {
        return data;
    })
}

function getTransactionHis (id) {
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer lll`,
        "Access-Control-Allow-Origin":"*"
    }

    return axios.get(`${APPCONFIG.appapi}/usertranss/${id}`, {
        headers
    })
}

function getDepHis (id) {
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer lll`,
        "Access-Control-Allow-Origin":"*"
    }

    return axios.get(`${APPCONFIG.appapi}/usercredit/${id}`, {
        headers
    })
}

function getAllTransHis () {
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer lll`,
        "Access-Control-Allow-Origin":"*"
    }

    return axios.get(`${APPCONFIG.appapi}/usertransactions`, {
        headers
    })
}

function getAllPayHis () {
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer lll`,
        "Access-Control-Allow-Origin":"*"
    }

    return axios.get(`${APPCONFIG.appapi}/fetchpayment`, {
        headers
    })
}

function getAllStudents () {
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer lll`,
        "Access-Control-Allow-Origin":"*"
    }

    return axios.get(`${APPCONFIG.appapi}/fetchstudents`, {
        headers
    })
}

function registerStudent(tagid, fname, lname, pin, money, password, active, email) {
    const headers = {
        "Content-Type": "application/json",
        Authorisation: `Bearer 111`,
        "Access-Control-Allow-Origin": "*",
        body: JSON.stringify()
    }
    return axios.post(`${APPCONFIG.appapi}/register`,{
        headers,
        tagid: tagid,
        fname: fname,
        lname: lname,
        pin: pin,
        money: money,
        password: password,
        active: active,
        email: email
    })
    .then(data=> {
        return data;
    })
}

function updateUser(id,tagid,fname,lname,pin,password,email) {
    const headers = {
        "Content-Type": "application/json",
        Authorisation: `Bearer 111`,
        "Access-Control-Allow-Origin": "*",
        body: JSON.stringify()
    }
    return axios.put(`${APPCONFIG.appapi}/updateuser/${id}`,{
        headers,
        id: id,
        tagid: tagid,
        fname: fname,
        lname: lname,
        pin: pin,
        password: password,
        email: email,
    })
    .then(data=> {
        return data;
    })
}

function deleteUser(id) {
    const headers = {
        "Content-Type": "application/json",
        Authorisation: `Bearer 111`,
        "Access-Control-Allow-Origin": "*",
        body: JSON.stringify()
    }
    return axios.post(`${APPCONFIG.appapi}/delete`,{
        headers,
        id: id
    })
    .then(data=> {
        return data;
    })
}







