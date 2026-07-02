import axios from "axios"

// Cria uma instância do Axios com a URL base da API

const api = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 5000
})

export default  api;