import BrainFlixLogo from '../../assets/logo/BrainFlix-logo.svg';
import SearchAva from '../../assets/images/Mohan-muruge.jpg';
import { Link } from 'react-router-dom';
import './PageHeader.scss';

const Header = () => {
    return (
    <nav className="primary-nav">
        <img className="primary-nav__logo" src={BrainFlixLogo} alt="primary nav logo" />
        <div className="primary-nav__searchandupload"> 
            <div className="primary-nav__searchbar">
                <input className="primary-nav__search" type="text" name="search" placeholder="Search" />
                <img className="primary-nav__search--avatar" src={SearchAva} alt="Search Bar Avatar" />
            </div>
            <Link to="/Upload">
                <input className= "primary-nav__upload" type="submit" value="UPLOAD"></input>
            </Link>
        </div>
    </nav>
    )
}

export default Header;