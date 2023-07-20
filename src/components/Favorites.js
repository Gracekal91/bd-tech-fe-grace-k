import React, { useEffect, useState } from "react";
import useFetchData from "../hooks/useAxios";
import API_URL from "../config/api";
import FavouriteCard from "./cards/FavouriteCard";
import { GetFavoriteProfileData, getFavoritesForTheCurrentUser, DeleteFavorite } from "../utils/loggedInUser";


const Favorites = () => {
    const { baseurl } = API_URL;
    const { data: favoritesData, loading, error } = useFetchData(`${baseurl}/favorites`);

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


    if (loading) {
        return <div style={{ color: "white" }}>Loading...</div>;
    }

    if (error || !favoritesData || !favoritesData.data || !favoritesData.data.favorites) {
        return <div>Error loading data.</div>;
    }

    if (!favoriteProfiles || favoriteProfiles.length === 0) {
        return <div>No favorites found.</div>;
    }

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
