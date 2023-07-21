import {Link} from 'react-router-dom';
import {AddFavorite} from "../../services/api";
import {CheckFavorite} from "../../utils/helper";
import {useEffect, useState} from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ProfileCard = ({item}) => {
    const [favoriteStatus, setFavoriteStatus] = useState("LOADING");


    const backgroundImageStyle = {
        backgroundImage: `url(${item?.avatar})`,
    };

    const handleFavorite =  async () =>{
        try {
            const result = await CheckFavorite(item?.id);
            setFavoriteStatus(result);
        } catch (error) {
            console.log("Error checking favorite:", error);
        }
    }

    const handleAddFavorite = async () => {
        try {
            if (favoriteStatus === "LIKE") {
                // Item is already a favorite, so remove it from favorites
                //await RemoveFavorite(item?.id);
                console.log('Remove')
                setFavoriteStatus("UNLIKE");
            } else {
                // Item is not a favorite, so add it to favorites
                await AddFavorite(item?.id);
                setFavoriteStatus("LIKE");
            }
        } catch (error) {
            console.log("Error handling favorite:", error);
        }

    };

    // Initial load to check the favorite status
    useEffect(() => {
        handleFavorite();
        // eslint-disable-next-line
    }, []);

    return(
        <>
            <div className='dwa-card-container'>
            <Link to={`/profiles/${item.id}`} >
            <div className="dwa-card-profile"
            style={backgroundImageStyle}></div>

            </Link>
                <div className="dwa-card-content">
                    <h3 className="dwa-card-title">{item?.name}</h3>
                    <p className="dwa-card-contents">
                        <span>{item?.age}, </span>
                        <span>{item?.city}</span>
                        <span onClick={handleAddFavorite} className='profile-card-icon' >
                            {favoriteStatus === "LIKE" ? (
                                <AiFillHeart style={{ color: "#fff"}}/>
                            ) : (<AiOutlineHeart />
                        )}
            </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProfileCard;