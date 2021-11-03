import BrainFlixLogo from '../../assets/logo/BrainFlix-logo.svg';
import UploadIcon from '../../assets/icons/upload.svg';
import './Header.scss';

const Header = () => {
    return (
    <nav className="primary-nav">
        <img className="primary-nav__logo" src={BrainFlixLogo} alt="primary nav logo" />
        <div className="primary-nav__searchbar">
            <input className="primary-nav__search primary-nav__search--avatar" type="text" name="search" placeholder="Search" />
            <input className= "primary-nav__upload" type="submit" value="UPLOAD"></input>
        </div>

    </nav>
    )
}

export default Header;