import SearchAva from '../../assets/images/Mohan-muruge.jpg';
import '../../components/CommentListItem/CommentListItem.scss';

function CommentListItem({ name, comment, timestamp}) {
    let postedDate = new Date(timestamp);

    postedDate = postedDate.toLocaleString().slice(0,9);
    postedDate = postedDate.replace(/ ,/g, '')
    postedDate = postedDate.trim();
    console.log(postedDate)
    
    return (
       <div className="commentlist-item__item"> 
       <img className="commentlist-item__avatar--logo" src={SearchAva} alt='comment form avatar' />
            <div className="commentlist-item__info">
                <p className="commentlist-item__detail"><strong>{name}</strong></p>
                <p className="commentlist-item__date">{postedDate}</p>
            </div>
                <p className="commentlist-item__detail">{comment}</p>
                

        </div>
 
    )}

export default CommentListItem;