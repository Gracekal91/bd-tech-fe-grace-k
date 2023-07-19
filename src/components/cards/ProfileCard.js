const ProfileCard = ({item}) => {
    const backgroundImageStyle = {
        backgroundImage: `url(${item?.avatar})`,
    };

    return(
        <div className='dwa-card-container'>
            <div className="dwa-card-profile"
            style={backgroundImageStyle}></div>
            <div className="dwa-card-content">
                <h3 className="dwa-card-title">{item?.name}</h3>
                <p className="dwa-card-contents">
                    <span>{item?.age}, </span>
                    <span>{item?.city}</span>
                </p>
            </div>
        </div>
    )
}

export default ProfileCard;