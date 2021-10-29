function VideoSectionItem({title, id, handleVideoSelect}) {
    return (
        <li onClick={() => handleVideoSelect(id)}>{title}</li>
    )
}

export default VideoSectionItem;