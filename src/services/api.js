import api from 'apisauce'
//na base url fica o endereço da api, caso esteja rodando local deve color o ipv4
export default  api.create({
    baseURL: "http://192.168.1.5:5000/api"
})