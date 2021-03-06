import axios from 'axios';

//1.HTTP Request & Response 관련 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

//2. API 함수들을 정리 
function fetchNewsList(){
    return axios.get(`${config.baseUrl}news/1.json`);
}
function fetchAskList(){
    return axios.get(`${config.baseUrl}ask/1.json`);
}
function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`);
}
function fetchCommentItem(id){
    return axios.get(`${config.baseUrl}item/${id}.json`);
}
function fetchUserInfo(username){
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchCommentItem,
    fetchUserInfo
}


