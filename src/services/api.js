import axios from "axios";
import config from '../config/config'



export const RemoveFavorite = async (id) => {
    try{
        const response = await axios.delete(`${config.API_BASE_URL}/favorites`, {
            data: {
                profileId: id
            }
        });

        if(response.status === 200){
           console.log('successful')
        }
    }catch (e) {
        console.log('error', e);
    }
}

export const AddFavorite = async (id) => {
    try{
        const response = await axios.post(`${config.API_BASE_URL}/favorites`, {profileId: id});

        if(response.status === 200){
            console.log('successful')
        }
    }catch (e) {
        console.log('error', e);
        throw new Error(e);
    }
}

export const GetFavorite = async () =>{
    const user = config.loggedInUser;
    try{
        const response = await axios.get(`${config.API_BASE_URL}/favorites`)
        if(response.status === 200){

            const {favorites} = await response.data
            console.log('successfully ', favorites[user])
            return favorites[user];
        }
    }catch (e) {
        console.log('Error', e)
        throw new Error(e)
    }
}