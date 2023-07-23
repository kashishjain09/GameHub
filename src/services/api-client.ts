 import axios from "axios";

 export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'f39cab2d3693489484fcc1a677d890ce'
    }
 })

//  https://api.rawg.io/api/games