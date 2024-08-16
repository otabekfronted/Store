import axios from "axios";

let mainUrl = "https://json-api.uz/api/project/otabek-todo-list/";

export const axiosClient = axios.create({
    baseURL: mainUrl,
});
