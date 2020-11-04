import axios from 'axios'

export default axios.create({
    baseURL: "http://192.168.23.2:5000/api"
})