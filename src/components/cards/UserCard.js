const UserCard = ({avatar}) =>{
    return(
        <div className='user-card-container'>
            <img src={avatar} alt='profile' />
        </div>
    )
}

export default UserCard;