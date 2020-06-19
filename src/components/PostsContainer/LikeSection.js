// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'

const LikeSection = ({ likes, setLikes }) => {
  const [liked, setLiked] = useState(false);

  const likeComment = e => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
      e.target.classList.remove('liked-by-user');
    } else {
      setLiked(true);
      setLikes(likes + 1);
      e.target.classList.add('liked-by-user');
    }
  }

  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div onClick={likeComment} className="like-section-wrapper">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">{likes}</p>
    </div>
  )
};

export default LikeSection;
