import React from 'react'
import { Link } from 'react-router-dom';
import Ruffles from '../../assets/images/ruffles.jpg'
import './Upload.scss'
import {Component} from 'react'

class UploadPage extends Component {

    constructor() {
        super();
        this.isUploadSuccessful = false;
    }

    uploadSuccess = () => {
        this.isUploadSuccessful = true;
        alert('You have successfully uploaded your video');
    }



    render() {
    return (
        <div>
            <div className="upload-section">
                <h1 className="upload-section__title">Upload Video</h1>
                <form onClick="redirect(./)" className="upload-section__form">
                    <div className="upload-section__container">
                        <div className="upload-section__videothumbnail">
                            <label className="upload-section__label">VIDEO THUMBNAIL</label>
                            <img className="upload-section__thumbnail" src={Ruffles} alt="ruffles thumbnail" />
                        </div>
                        <div className="upload-section__inputinfo">
                            <label className="upload-section__label">TITLE YOUR VIDEO</label>
                            <input className="upload-section__input" type="text" name="title" placeholder="Add a title to your video"></input>

                            <label className="upload-section__label">ADD A VIDEO DESCRIPTION</label>
                            <input className="upload-section__description--input" type="text" name="title" placeholder="Add a description to your video"></input>
                        </div>
                    </div>
                    <div className="upload-section__submitbuttons">
                        {/* <Link to="/"> */}
                            <input onClick={this.uploadSuccess} className="upload-section__publish" type="submit" value="PUBLISH"></input>
                        {/* </Link> */}
                        <Link to="/">
                            <input className= "upload-section__cancel" type="submit" value="CANCEL"></input>
                        </Link>
                    </div>

                 </form>
            </div>
        </div>
    )
}
}

export default UploadPage
