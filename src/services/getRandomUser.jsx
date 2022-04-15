import axios from "axios";

export const getRandomUser = async () =>{
    try{
        const res = await axios('https://randomuser.me/api/');
        console.log('se llamo a la api de usuarios')
        return res.data.results[0]
    }catch(err){
        console.log(err.response)
    }
}