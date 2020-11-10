import api from 'apisauce'
//na base url fica o endereço da api, caso esteja rodando local deve color o ipv4
export default  api.create({
    baseURL: "http://192.168.11.150:5000/api"
})