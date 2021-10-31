import CommentListItem from '../CommentListItem/CommentListItem';


function CommentList({selectedVideo}) {
console.log(selectedVideo.comments)
    return(
        <div className="video-comments__list">
                <ul className="video-comments__nextcomment">
                    {selectedVideo.comments.map(comment => (
                        <CommentListItem
                        key={comment.id}
                        id={comment.id}
                        name={comment.name}
                        timestamp={comment.timestamp}
                        comment={comment.comment}
                        />

                    ))}   
                </ul>
        </div>
    )
}

export default CommentList;