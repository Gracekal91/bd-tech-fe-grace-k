import React from "react";
import ProfileCard from "./cards/ProfileCard";
import useFetchData from "../hooks/useAxios";
import API_URL from "../config/api";
import FavouriteCard from "./cards/FavouriteCard";

const CardList = ({ cardType }) => {
    const { baseurl } = API_URL;
    const { data, loading, error } = useFetchData(`${baseurl}${cardType?.url}`);

    if (loading) {
        return <div style={{color: 'white'}}>Loading...</div>;
    }

    if (error || !data || !data.data || !data.data.profiles) {
        return <div>Error loading data.</div>;
    }

    const { profiles, favorites } = data.data;

    if (cardType?.type === "overview") {
        if (!profiles || profiles.length === 0) {
            return <div>No profiles available.</div>;
        }

        return (
            <div className="card-list-container">
                {profiles.map((item) => (
                    <ProfileCard item={item} key={item.id} />
                ))}
            </div>
        );
    }
if(cardType?.type === 'favourite') {
    if (!favorites || !favorites["123456"] || favorites["123456"].length === 0) {
        return <div>No favorites found.</div>;
    }
}

    return (
        <div className="card-list-container">
            {favorites["123456"].map((item) => (
                <FavouriteCard key={item.id} />
            ))}
        </div>
    );
};

export default CardList;
