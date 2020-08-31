import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-c378b.firebaseio.com/'
});

export default instance;