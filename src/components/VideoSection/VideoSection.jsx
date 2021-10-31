import './videosection.scss';
import PlayIcon from '../../assets/icons/play.svg';
import ScrubControl from '../../assets/icons/scrub.svg';
import FullScreenIcon from '../../assets/icons/fullscren.svg';
import VolumeUp from '../../assets/icons/volume_up.svg';

function VideoSection(props) {
    const { title, channel, image, description, views, likes, duration, timestamp } = props.selectedVideo;

    return (
        <div className="primary-video">
            <div className="primary-video__icons">
                <div className="primary-video__icons--play">
                    <img className="primary-video__icons--playicon" src={PlayIcon} alt="Play Icon" />
                </div>
                <div className="primary-video__icons--scrub">
                    <img className="primary-video__icons--scrubicon" src={ScrubControl} alt="Scrub Icon" />
                </div>
                <div className="primary-video__icons--videoadjustments">
                    <img className="primary-video__icons--screenadjicon" src={FullScreenIcon} alt="Full Screen Icon" />
                    <img className="primary-video__icons--volumeupicon" src={VolumeUp} alt="Volume Up" />
                </div>
                </div>
                    <img className="primary-video__video" src={image} alt="BMX Rampage" />
            <h2 className="primary-video__title">{title}</h2>

            <div className="primary-video__metrics">
                <p className="primary-video__metrics-channel">{channel}</p>
                <p className="primary-video__metrics-views">{views}</p>
            </div>
                <div className="primary-video__info">
                    <p className="primary-video__info-date">{timestamp}</p>
                    <p className="primary-video__info-likes">{likes}</p>
                </div>
            
            <p className="primary-video__description">{description}</p>
            
        </div>
    )
}

export default VideoSection;