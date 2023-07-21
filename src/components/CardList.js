import React from "react";
import ProfileCard from "./cards/ProfileCard";
import useFetchData from "../hooks/useAxios";
import config from "../config/config";
import Loader from "./shared/Loader";

const CardList = () => {
    const { data, loading, error } = useFetchData(`${config.API_BASE_URL}/profiles`);

    if (loading) return <Loader />;


    if (error || !data || !data.data) {
        return <div>Error loading data.</div>;
    }

    const { profiles } = data.data;

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
};

export default CardList;
