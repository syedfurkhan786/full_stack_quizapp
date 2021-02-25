import axios from 'axios';


const QUIZ_API_URL = 'http://localhost:8080/demo-boot-two/api/v1'

class QuizService {

    retrieveResults(username,language,score){
        return axios.post(`${QUIZ_API_URL}/${username}/quiz/${language}/results/${score}`)
    }

    retrieveAllQuestions(username,language){
        return axios.post(`${QUIZ_API_URL}/${username}/quiz/${language}`)
    }

    retrieveUserById(id){
        return axios.get(`${QUIZ_API_URL}/users/${id}`)
    }

    retrieveAllUsers() {
        return axios.get(`${QUIZ_API_URL}/users`);
    }

    registerUser(user){
        return axios.post(`${QUIZ_API_URL}/users/`, user);
    }

    loginUser(id,user){
        return axios.post(`${QUIZ_API_URL}/users/${id}`,user);
    }
}

export default new QuizService()