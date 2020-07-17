import React from 'react';
import './PostItem.css';

const PostItem = (props) => {
  console.log(props);
    return(
        <div className="postItem">
            <div className="title">{props.title}</div>
            <div>{props.body}</div>
        </div>
    );
}

export default PostItem;