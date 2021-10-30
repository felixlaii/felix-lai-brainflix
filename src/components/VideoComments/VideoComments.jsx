import './videocomments.scss';

function VideoComments(props) {

    return (
        <div className="video-comments">
            <p className="video-comments__counter">3 Comments</p>
            <h2 className="video-comments__title">JOIN THE CONVERSATION</h2>
            <div className="video-comments__form">
                <input className="video-comments__input"type="text" name="name" placeholder="Add a new comment"></input>
                {/* <p className="video-comments__comments">{props.comments}</p> */}
            </div>
        </div>
    )
}

export default VideoComments;