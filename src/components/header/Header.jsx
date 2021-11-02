import BrainFlixLogo from '../../assets/logo/BrainFlix-logo.svg';
import UploadIcon from '../../assets/icons/upload.svg';
// import SearchIcon from '../../assets/icons/search.svg';
// import SearchAva from '../../assets/images/Mohan-muruge.jpg';
import './Header.scss';

const Header = () => {
    return (
    <nav className="primary-nav">
        <img className="primary-nav__logo" src={BrainFlixLogo} alt="primary nav logo" />
        <div className="primary-nav__searchbar">
            {/* <div className="primary-nav__searchbar--avatar"></div> */}
            {/* <img className="primary-nav__searchbar--avatar" src={SearchAva} alt="search bar avatar" /> */}
            {/* <img className="primary-nav__searchbar--icon" src={SearchIcon} alt="search icon" /> */}
            <input className="primary-nav__search primary-nav__search--avatar" type="text" name="search" placeholder="Search" />
            {/* <img className="primary-nav__upload--icon" src={UploadIcon} alt="primary icon" /> */}
            <input className= "primary-nav__upload" type="submit" value="UPLOAD"></input>
        </div>

    </nav>
    )
}

export default Header;