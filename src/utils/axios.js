import axios from "axios"

const BaseURL = axios.create({ baseURL: "http://localhost:5000", headers: {
  Authorization : window.localStorage.getItem("token")
}})


export default BaseURL