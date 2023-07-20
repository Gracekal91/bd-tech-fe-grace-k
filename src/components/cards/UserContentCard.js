import {FiCalendar} from "react-icons/fi";
import {TfiLocationPin} from "react-icons/tfi";
import {SlPeople} from "react-icons/sl";

const UserContentCard = ({userInfo}) =>{
    return(
        <>
            <div className="dwa-user-content-card">
                <h1 className="dwa-user-name">{userInfo.name}</h1>
                <div className="dwa-user-content-container">
                <div className="dwa-user-content-text">
                    <p className='dwa-icon'><FiCalendar /></p>
                    <p className='dwa-text-title'>Age</p>
                    <p className='dwa-text-sub'>32</p>
                </div>
                    <div className="dwa-user-content-text">
                        <p className='dwa-icon'><TfiLocationPin /></p>
                        <p className='dwa-text-title'>Location</p>
                        <p className='dwa-text-sub'>{userInfo.city}</p>
                    </div>
                    <div className="dwa-user-content-text">
                        <p className='dwa-icon'><SlPeople /></p>
                        <p className='dwa-text-title'>Status</p>
                        <p className='dwa-text-sub'>{userInfo.relationship_status}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserContentCard;