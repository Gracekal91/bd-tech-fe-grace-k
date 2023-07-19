import {AiFillHeart} from "react-icons/ai";

const FavouriteCard = () => {
    return(
        <div className='dwa-fav-card-container'>
            <div className="dwa-fav-inner-bottom">
                <span className='text'>Unlike</span>
                <span className='icon'><AiFillHeart /></span>
            </div>
        </div>
    )
}

export default FavouriteCard;