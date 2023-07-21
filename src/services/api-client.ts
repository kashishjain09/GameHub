 import axios from "axios";

 export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'a44ea961cf7049668cc057c683ee00c4'
    }
 })