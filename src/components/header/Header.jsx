import BrainFlixLogo from '../../assets/logo/BrainFlix-logo.svg';
import SearchAva from '../../assets/images/Mohan-muruge.jpg';
import './Header.scss';

const Header = () => {
    return (
    <nav className="primary-nav">
        <img className="primary-nav__logo" src={BrainFlixLogo} alt="primary nav logo" />
        {/* use to be searchbar */}
        <div className="primary-nav__searchandupload"> 
            <div className="primary-nav__searchbar">
                <input className="primary-nav__search" type="text" name="search" placeholder="Search" />
                <img className="primary-nav__search--avatar" src={SearchAva} alt="Search Bar Avatar" />
                {/* <div className="primary-nav__search--avatar"></div> */}
            </div>
            <input className= "primary-nav__upload" type="submit" value="UPLOAD"></input>
        </div>

    </nav>
    )
}

export default Header;