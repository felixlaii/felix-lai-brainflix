import './videocomments.scss';

import SearchAva from '../../assets/images/Mohan-muruge.jpg';
import AddComment from '../../assets/icons/add_comment.svg';

function VideoComments(props) {
   const { name, comment, timestamp } = props.selectedVideo;

    return (
        <div className="video-comments">
            <p className="video-comments__counter">3 Comments</p>
            <img className="video-comments__avatar" src={SearchAva} alt='comment form avatar' />
            <img className="video-comments__addcomment" src={AddComment} alt='comment submit icon' />
           
                <label className="video-comments__label">JOIN THE CONVERSATION</label>
                <div className="video-comments__form">
                <input className="video-comments__input"type="text" name="name" placeholder="Add a new comment"></input>
                <input className= "video-comments__submit" type="submit" value="COMMENT"></input>
            </div>
        </div>
    )
}

export default VideoComments;