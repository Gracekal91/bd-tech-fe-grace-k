import '../assets/scss/App.scss'

const Header = () =>{
    return(
        <div className='dwa-header'>
            <div className="dwa-header-content">
                <div className="dwa-left-side"> DWA </div>
                <a href="/account" className="dwa-right-side" >My Account</a>
            </div>
        </div>
    )
}

export default Header;