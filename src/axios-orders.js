import axios from 'axios';

const instance= axios.create({
    baseURL: 'https://react-my-burger-38d16.firebaseio.com/'
});

export default instance;
