import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "271fcd8181ac163d1050f2d10d449160",
        language: "ko-KR"
    }
})

export default instance;