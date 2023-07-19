import FavouriteCard from "../cards/FavouriteCard";
import CardList from "../CardList";

const cardType = {
    url: '/favorites'

};

const FavoriteSection = () =>{
    return(
        <div className='dwa-section-container'>
            <hr className='dwa-section-divider'/>
            <h3 className="dwa-section-title">MY FAVOURITES</h3>
            <CardList cardType={cardType}/>
            <FavouriteCard />
        </div>
    )
}

export default FavoriteSection