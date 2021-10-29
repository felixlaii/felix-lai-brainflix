import './videosection.scss';
import PlayIcon from '../../assets/icons/play.svg';
import ScrubControl from '../../assets/icons/scrub.svg';
import FullScreenIcon from '../../assets/icons/fullscren.svg';
import VolumeUp from '../../assets/icons/volume_up.svg';

function VideoSection(props) {

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
                    <img className="primary-video__video" src={props.image} alt="BMX Rampage" />
            <h2 className="primary-video__title">{props.title}</h2>

            <div className="primary-video__metrics">
                <p className="primary-video__metrics-channel">{props.channel}</p>
                <p className="primary-video__metrics-views">{props.views}</p>
            </div>
                <div className="primary-video__info">
                    <p className="primary-video__info-date">{props.timestamp}</p>
                    <p className="primary-video__info-likes">{props.likes}</p>
                </div>
            
            <p className="primary-video__description">{props.description}</p>
        </div>
    )
}

export default VideoSection;