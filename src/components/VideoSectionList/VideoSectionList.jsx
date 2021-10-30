import VideoSectionItem from '../VideoSectionItem/VideoSectionItem';
import './videosectionlist.scss';

function VideoSectionList({videoList, handleVideoSelect}) {
    return(
        <div className="video-list">
            <h2 className="video-list__title">NEXT VIDEOS</h2>
            <div className="video-list__suggestions">
                <ul className="video-list__nextvideo">
                    {videoList.map(video => (
                        <VideoSectionItem
                        key={video.id}
                        id={video.id}
                        title={video.title}
                        image={video.image}
                        channel={video.channel}
                        handleVideoSelect={handleVideoSelect}/>

                    ))}   
                </ul>
            </div>
        </div>
    )
}

export default VideoSectionList;