// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = ({ imageUrl, comments, setComments }) => {
  // Add state for the comments
  // const [comments, setComments] = useState(props.comments);

  const [comment, setComment] = useState('')

  const changeComment = e => {
    setComment(e.target.value);
  }

  const submitComment = e => {
    e.preventDefault();
    const newComment = {
      username: 'krayziesensei',
      text: comment
    }
    setComments([...comments, newComment]);
    setComment('');
  }

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map((comment, i) => <Comment key={i} comment={comment} />)}
      <CommentInput submitComment={submitComment} changeComment={changeComment} comment={comment} />
    </div>
  );
};

export default CommentSection;
