import UserCard from "../components/cards/UserCard";
import BannerCard from "../components/cards/BannerCard";
import UserContentCard from "../components/cards/UserContentCard";
import useFetchData from "../hooks/useAxios";
import config from "../config/config";
import {useParams} from "react-router-dom";
import Loader from "../components/shared/Loader";
import Error from "../components/shared/Error";


const UserProfile = () =>{
    const {id} = useParams();
    const { data, loading, error } = useFetchData(`${config.API_BASE_URL}/profiles/${id}`);
    if(loading) return <Loader />

    if(error) return <Error msg="failed to load data"/>

    if(!data) return <Error msg="Error while pulling data"/>

    const userInfo = data?.data;
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