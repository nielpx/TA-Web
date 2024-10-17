import axios from "axios"

const BaseURL = axios.create({ baseURL: "https://bukuprestasi.bwx1y.my.id/", headers: {
  Authorization : window.localStorage.getItem("token")
}})


export default BaseURL