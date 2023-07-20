import {AiFillHeart} from "react-icons/ai";
import {RemoveFavorite} from "../../services/api";


const FavouriteCard = ({item, onRemove}) => {

    const backgroundStyle = {
        backgroundImage: `url(${item?.avatar})`
    }

    const handleFavorite = async () => {
        try {
            await RemoveFavorite(item?.id);
            onRemove();
            console.log("Successfully removed favorite");
        } catch (error) {
            console.error("Error removing favorite:", error);
        }
    };

    return(
        <div className='dwa-fav-card-container' style={backgroundStyle}>
            <div className="dwa-fav-inner-bottom" onClick={handleFavorite}>
                <span className='text'>Unlike</span>
                <span className='icon'><AiFillHeart /></span>
            </div>
        </div>
    )
}

export default FavouriteCard;