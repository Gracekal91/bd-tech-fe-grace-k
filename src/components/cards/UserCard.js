const UserCard = ({avatar}) =>{
    const backgroundImageStyle = {
        backgroundImage: `url(${avatar})`,
    };
    return(
        <div className='user-card-container'>
            <img src={avatar} alt=""/>
        </div>
    )
}

export default UserCard;