import '../assets/scss/App.scss'

const Header = () =>{
    return(
        <div className='dwa-header'>
            <div className="dwa-header-content">
                <a href="/" className="dwa-left-side"> DWA </a>
                <a href="/account" className="dwa-right-side" >My Account</a>
            </div>
        </div>
    )
}

export default Header;