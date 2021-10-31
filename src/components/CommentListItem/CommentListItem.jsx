import SearchAva from '../../assets/images/Mohan-muruge.jpg';

function CommentListItem({ name, comment, timestamp}) {
    let postedDate = new Date(timestamp);

    postedDate = postedDate.toLocaleString().slice(0,9);
    postedDate = postedDate.replace(/ ,/g, '')
    postedDate = postedDate.trim();
    console.log(postedDate)
    
    return (
       <div className="video-comments__item"> 
       <img className="video-comments__avatar--logo" src={SearchAva} alt='comment form avatar' />
            <div className="video-comments__info">
                <p className="video-comments__detail"><strong>{name}</strong></p>
                <p className="video-comments__date">{postedDate}</p>
            </div>
                <p className="video-comments__detail">{comment}</p>
                

        </div>
 
    )}

export default CommentListItem;