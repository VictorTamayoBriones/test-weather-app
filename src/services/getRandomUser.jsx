import axios from "axios";

export const getRandomUser = async () =>{
    const res = await axios('https://randomuser.me/api/');
    return res.data.results[0]
}