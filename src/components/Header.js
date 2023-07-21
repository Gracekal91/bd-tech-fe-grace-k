import '../assets/scss/App.scss'
import {VscAccount} from "react-icons/vsc";

const Header = () =>{
    return(
        <div className='dwa-header'>
            <div className="dwa-header-content">
                <a href="/" className="dwa-left-side"> DWA </a>
                <a href="/account" className="dwa-right-side" >
                    <VscAccount />
                </a>
            </div>
        </div>
    )
}

export default Header;