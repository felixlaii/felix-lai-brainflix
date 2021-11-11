import React from 'react'
import { Link } from 'react-router-dom';
import Ruffles from '../../assets/images/ruffles.jpg'
import './Upload.scss'
import {Component} from 'react'
import axios from 'axios';

class UploadPage extends Component {

    uploadSuccess = (e) => {
        e.preventDefault();
        axios.post(`/videos`, {
            "title": e.target.title.value,
            "description": e.target.description.value,
            "image": '/ruffles.jpg'
        })
        .then(res => {
            alert('You have successfully uploaded your video');
            this.props.history.goBack()
            })
    }



    render() {
    return (
        <div>
            <div className="upload-section">
                <h1 className="upload-section__title">Upload Video</h1>
                <form onSubmit={this.uploadSuccess} className="upload-section__form">
                    <div className="upload-section__container">
                        <div className="upload-section__videothumbnail">
                            <label className="upload-section__label">VIDEO THUMBNAIL</label>
                            <img className="upload-section__thumbnail" src={Ruffles} alt="ruffles thumbnail" />
                        </div>
                        <div className="upload-section__inputinfo">
                            <label className="upload-section__label">TITLE YOUR VIDEO</label>
                            <input className="upload-section__input" type="text" name="title" placeholder="Add a title to your video"></input>

                            <label className="upload-section__label">ADD A VIDEO DESCRIPTION</label>
                            <input className="upload-section__description--input" type="text" name="description" placeholder="Add a description to your video"></input>
                        </div>
                    </div>
                    <div className="upload-section__submitbuttons">
                      
                            <input onSubmit={this.uploadSuccess} className="upload-section__publish" type="submit" value="PUBLISH"></input>
                     
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
