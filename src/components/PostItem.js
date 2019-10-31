import React from 'react';

import './PostItem.scss';

const PostHeader = ({author, date}) => {
  return (
    <div className="post-header">
      <img src={author.avatar} alt={author.name}/>
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  )
};

const PostComments = ({comments}) => {
  return (
    <div className="post-comments">
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img src={comment.author.avatar} alt={comment.author.name} />
          <p>
            <strong>{comment.author.name}</strong>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  )
}

const PostItem = ({author, date, content, comments}) => {
  return (
    <div className="post">
      <PostHeader author={author} date={date}/>
      <p className="post-content">{content}</p>
      <PostComments comments={ comments } />
    </div>
  );
};

export default PostItem;