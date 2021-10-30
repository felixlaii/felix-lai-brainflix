import './videosectionitem.scss';

function VideoSectionItem({title, image, channel, id, handleVideoSelect}) {
    return (
       <div className="video-list__item"> 
            <div className="video-list__thumbnail">
                <img className="video-list__image" src={image} onClick={() => handleVideoSelect(id)} />
            </div>
            <ul className="video-list__info">
                <li className="video-list__detail" onClick={() => handleVideoSelect(id)}><strong>{title}</strong></li>
                <li className="video-list__detail" onClick={() => handleVideoSelect(id)}>{channel}</li>
            </ul>
        </div>
 
    )}

export default VideoSectionItem;