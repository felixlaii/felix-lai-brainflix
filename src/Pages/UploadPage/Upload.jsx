import React from 'react'
import { Link } from 'react-router-dom';
import Ruffles from '../../assets/images/ruffles.jpg'
import './Upload.scss'

function UploadPage() {
    return (
        <div>

            <div className="upload-section">
                <h1 className="upload-section__title">Upload Video</h1>
                <form className="upload-section__form">
                    <label className="upload-section__label">VIDEO THUMBNAIL</label>
                    <img className="upload-section__thumbnail" src={Ruffles} alt="ruffles thumbnail" />

                    <label className="upload-section__label">TITLE YOUR VIDEO</label>
                    <input className="upload-section__input" type="text" name="title" placeholder="Add a title to your video"></input>

                    <label className="upload-section__label">ADD A VIDEO DESCRIPTION</label>
                    <input className="upload-section__description--input" type="text" name="title" placeholder="Add a description to your video"></input>

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