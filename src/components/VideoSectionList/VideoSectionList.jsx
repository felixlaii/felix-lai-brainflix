import React from 'react';
import VideoSectionItem from '../VideoSectionItem/VideoSectionItem';

function VideoSectionList({videos, handleVideoSelect}) {
    return (
        <div>
            <ul>
                {videos
                .map(video => (
                    <VideoSectionItem
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    handleVideoSelect={handleVideoSelect}
                    />
                ))}
            </ul>
        </div>
    )
}

export default VideoSectionList;