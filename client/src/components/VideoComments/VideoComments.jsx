import './VideoComments.scss';
import SearchAva from '../../assets/images/Mohan-muruge.jpg';

function VideoComments() {

    return (
        <div className="video-comments">
            <p className="video-comments__counter">3 Comments</p>
           
                <div className="video-comments__form">
                    <label className="video-comments__label">JOIN THE CONVERSATION</label>
                    <div className="video-comments__inputava">
                        <img className="video-comments__avatar" src={SearchAva} alt='comment form avatar' />
                        <input className="video-comments__input"type="text" name="name" placeholder="Add a new comment"></input>
                    </div>
                    <input className= "video-comments__submit" type="submit" value="COMMENT"></input>
                </div>
        </div>
    )
}

export default VideoComments;