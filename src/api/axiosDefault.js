import axion from "axios";

axios.defaults.baseURL = ''
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axion.defaults.withCredentils = true;