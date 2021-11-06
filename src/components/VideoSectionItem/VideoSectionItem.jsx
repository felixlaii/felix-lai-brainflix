import './VideoSectionItem.scss'
import { Link } from 'react-router-dom'

function VideoSectionItem({title, image, channel, id}) {
    return (
       <div className="video-list__item"> 
           <Link to={"/video/"+id}> 
           <div className="video-list__thumbnail">
                <img className="video-list__image" src={image}/>
            </div>
            <ul className="video-list__info">
                <li className="video-list__detail"><strong>{title}</strong></li>
                <li className="video-list__detail">{channel}</li>
            </ul>
            </Link>
        </div>
 
    )}

export default VideoSectionItem;