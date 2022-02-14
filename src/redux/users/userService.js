//import { history } from '../helpers/history';
import axios from 'axios';
import {APPCONFIG} from './../../config/config'

export const userService = {
    login,
    logout,
    getUser,
    getUserDepo,
    getUserTrans
};

function login(username,password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${APPCONFIG.appapi}/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('userdata', JSON.stringify(user));
            if (user.usertype==='admin') {
                window.location.replace('http://127.0.0.1:3000/admin')
            } else {
                window.location.replace('http://127.0.0.1:3000/profile')
            }
            return user;
        });
}

function getUser() {
    let data = window.localStorage.getItem('userdata')
    
        if (data) {
            JSON.parse(data);
            return;
        }
        return undefined
    
}

function logout() {
    // remove user from local storage to log user out
    const data = localStorage.getItem('userdata')
    if (data) {
        localStorage.clear()
        window.location.replace('http://127.0.0.1:3000/')
    }
    
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function getUserDepo (id) {
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer lll`,
        "Access-Control-Allow-Origin":"*"
    }

    return axios.get(`${APPCONFIG.appapi}/userdeposit?id=${id}`, {
        headers
    })
}

function getUserTrans (id) {
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer lll`,
        "Access-Control-Allow-Origin":"*"
    }

    return axios.get(`${APPCONFIG.appapi}/usertrans?id=${id}`, {
        headers
    })
}

