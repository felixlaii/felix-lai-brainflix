import React from 'react'
import BrainFlixLogo from '../../assets/logo/BrainFlix-logo.svg';
import SearchAva from '../../assets/images/Mohan-muruge.jpg';
import '../../components/Header/Header.scss';
import { Link } from 'react-router-dom';

function UploadPage() {
    return (
        <div>
            {/* <nav className="primary-nav">
                <img className="primary-nav__logo" src={BrainFlixLogo} alt="primary nav logo" />
                <div className="primary-nav__searchandupload"> 
                <div className="primary-nav__searchbar">
                    <input className="primary-nav__search" type="text" name="search" placeholder="Search" />
                    <img className="primary-nav__search--avatar" src={SearchAva} alt="Search Bar Avatar" />
                </div>
                    <input className= "primary-nav__upload" type="submit" value="UPLOAD"></input>
                </div>
            </nav> */}

            <div className="upload-section">
                <h1 className="upload-section__title">Upload Video</h1>
                <form className="upload-section__form">
                    <label className="upload-section__thumbnail--label">VIDEO THUMBNAIL</label>
                    <input className="upload-section__thumbnail--image" type="image" id="image" alt="Thumbnail Image" src="../../assets/images/Mohan-muruge.jpg"></input>

                    <label className="upload-section__video--label">TITLE YOUR VIDEO</label>
                    <input className="upload-section__video--inputtitle" type="text" name="title" placeholder="Add a title to your video"></input>

                    <label className="upload-section__description--label">ADD A VIDEO DESCRIPTION</label>
                    <input className="upload-section__description--inputdes" type="text" name="title" placeholder="Add a description to your video"></input>

                    <input className= "upload-section__publish" type="submit" value="PUBLISH"></input>

                    <Link to="/">
                    <input className= "upload-section__cancel" type="submit" value="CANCEL"></input>
                    </Link>

                 </form>
            </div>
        </div>
    )
}

export default UploadPage
