import UserCard from "../components/cards/UserCard";
import BannerCard from "../components/cards/BannerCard";
import UserContentCard from "../components/cards/UserContentCard";
import FavoriteSection from "../components/section/FavoriteSection";
import useFetchData from "../hooks/useAxios";
import config from "../config/config";
import {useParams} from "react-router-dom";


const UserProfile = () =>{
    const { baseurl } = config;
    const {id} = useParams();
    const { data, loading, error } = useFetchData(`${baseurl}/profiles/${id}`);
    if(loading) return " loading ..."
    if(error) return "Error"

    if(!data) return "Error while pulling data"
    const userInfo = data?.data;

    console.log('specific profile', userInfo);

    return(
        <>
            <BannerCard />
            <div className="dwa-container">
            <div className='dwa-user-profile-page'>
                <UserCard avatar={userInfo?.avatar}/>
                <UserContentCard userInfo={userInfo}/>
            </div>
            </div>
        </>
    )
}

export default UserProfile;