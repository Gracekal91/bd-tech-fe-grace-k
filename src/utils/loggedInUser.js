import config from "../config/config";
import axios from "axios";
import {GetFavorite} from "../services/api";


export const GetFavoriteProfileData = async (favoritesData) => {
    try {
        const response = await axios.get(`${config?.baseurl}/profiles`);
        const { data } = response;
        if(!data?.profiles) return []
        const { profiles } = await data;
        const favProfiles = await profiles.filter((obj) => favoritesData.includes(obj.id));
        return favProfiles;

    } catch (error) {
        console.error("Error loading data:", error);
        return [];
    }
};


export const getFavoritesForTheCurrentUser = (favorites) => {
    let userFavorites = Object.keys(favorites);
    let currentUserFavs = userFavorites.find(item => item === config.loggedInUser);
    return favorites[currentUserFavs];
}

export const CheckFavorite = async (id) => {
    const favorites = await GetFavorite();
    if(favorites.includes(id)) {
        console.log(true)
        return 'LIKE'
    }else {
        console.log(false)
        return 'UNLIKE'
    }
}
