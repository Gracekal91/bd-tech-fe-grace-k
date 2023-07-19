import UserCard from "../components/cards/UserCard";
import BannerCard from "../components/cards/BannerCard";
import UserContentCard from "../components/cards/UserContentCard";
import FavoriteSection from "../components/section/FavoriteSection";

const UserProfile = () =>{
    return(
        <>
            <BannerCard />
            <div className="dwa-container">
            <div className='dwa-user-profile-page'>
                <UserCard />
                <UserContentCard />
            </div>
                <FavoriteSection />
            </div>
        </>
    )
}

export default UserProfile;