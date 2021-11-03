import './videosection.scss';
import PlayIcon from '../../assets/icons/play.svg';
import ScrubControl from '../../assets/icons/scrub.svg';
import FullScreenIcon from '../../assets/icons/fullscren.svg';
import VolumeUp from '../../assets/icons/volume_up.svg';
import VideoViews from '../../assets/icons/views.svg';
import VideoLikes from '../../assets/icons/likes.svg';


function VideoSection(props) {
    const { title, channel, image, description, views, likes, duration, timestamp, video } = props.selectedVideo;

    let postedDate = new Date(timestamp);

    postedDate = postedDate.toLocaleString().slice(0,9);
    postedDate = postedDate.replace(/ ,/g, '')
    postedDate = postedDate.trim();
    console.log(postedDate)

    return (
        <div className="primary-video">
            <div className="primary-video__videoicon">
                <video className="primary-video__video" poster={image} controls></video>
            </div>
           
            <h2 className="primary-video__title">{title}</h2>

            <div className="primary-video__metrics">
                <div className="primary-video__container">
                    <p className="primary-video__container-channel"><strong>By {channel}</strong></p>
                    <p className="primary-video__container-date">{postedDate}</p>
                </div>
                <div className="primary-video__info">
                    <div className="primary-video__reachability">
                        <img className="primary-video__viewsicon" src={VideoViews} alt='Video Views' />
                        <p className="primary-video__info-views">{views}</p>
                    </div>
                    <div className="primary-video__likeability">
                        <img className="primary-video__likesicon" src={VideoLikes} alt='Video Likes' />
                        <p className="primary-video__info-likes">{likes}</p>
                    </div>
                </div>
            </div>
            <p className="primary-video__description">{description}</p>
        </div>
    )
}

export default VideoSection;