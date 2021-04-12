import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://burger-builder-project-589b3-default-rtdb.firebaseio.com/'

});

export default instance;
