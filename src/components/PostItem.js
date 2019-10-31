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

const PostComments = () => {
  return (
    <div className="post-comments">
      <h3>Comments</h3>
    </div>
  )
}

const PostItem = ({author, date, content}) => {
  return (
    <div className="post">
      {console.log(author, date)}
      <PostHeader author={author} date={date}/>
      <p className="post-content">{content}</p>
      <PostComments />
    </div>
  );
};

export default PostItem;