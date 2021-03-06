import CommentListItem from '../CommentListItem/CommentListItem';
import '../CommentList/CommentList.scss';

function CommentList({selectedVideo}) {
    return(
        <div className="comment-list__list">
            <ul className="comment-list__wrapper">
                <li className="comment-list__nextcomment">
                     {selectedVideo.comments.map(comment => (
                        <CommentListItem
                        key={comment.id}
                        id={comment.id}
                        name={comment.name}
                        timestamp={comment.timestamp}
                        comment={comment.comment}
                        /> 
                    ))}   
                </li>
            </ul>
        </div>
    )
}

export default CommentList;