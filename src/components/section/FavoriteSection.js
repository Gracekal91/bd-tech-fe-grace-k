import Favorites from "../Favorites";

const FavoriteSection = () =>{
    return(
        <div className='dwa-section-container'>
            <hr className='dwa-section-divider'/>
            <h3 className="dwa-section-title">MY FAVOURITES</h3>
            <Favorites />
        </div>
    )
}

export default FavoriteSection