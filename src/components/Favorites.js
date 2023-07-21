import React, { useEffect, useState } from "react";
import useFetchData from "../hooks/useAxios";
import config from "../config/config";
import FavouriteCard from "./cards/FavouriteCard";
import { GetFavoriteProfileData, getFavoritesForTheCurrentUser } from "../utils/helper";
import Loader from "./shared/Loader";
import Error from "./shared/Error";


const Favorites = () => {
    const { data: favoritesData, loading, error } = useFetchData(`${config.API_BASE_URL}/favorites`);

    // State to hold the favorite profiles
    const [favoriteProfiles, setFavoriteProfiles] = useState([]);

    useEffect(() => {
        // Fetch the favorite profiles using the utility function and wait for the Promise to resolve
        const fetchFavoriteProfiles = async () => {
            if (!favoritesData || !favoritesData.data || !favoritesData.data.favorites) {
                // Handle the case where favoritesData is not available yet
                return;
            }

            const { favorites } = favoritesData.data;
            const currentUserFavorites = getFavoritesForTheCurrentUser(favorites);
            const profiles = await GetFavoriteProfileData(currentUserFavorites);

            setFavoriteProfiles(profiles);
        };

        fetchFavoriteProfiles();
    }, [favoritesData]);


    if (loading) return <Loader />

    if (error ||
        !favoritesData ||
        !favoritesData.data ||
        !favoritesData.data.favorites
    ) return <Error msg="Error loading data."/>;


    if (!favoriteProfiles ||
        favoriteProfiles.length === 0
    ) return <Error msg=" You haven't liked any profile yet" />

    const handleRemoveFavorite = (id) =>{
        const updatedList = favoriteProfiles.filter((item) => item.id !== id);
        setFavoriteProfiles(updatedList)
    }
    return (
        <div className="fav-list-container">
            {favoriteProfiles.map((item) => (
                <FavouriteCard key={item.id} {...item} item={item} onRemove={() => handleRemoveFavorite(item.id)}/>
            ))}
        </div>
    );
};

export default Favorites;
