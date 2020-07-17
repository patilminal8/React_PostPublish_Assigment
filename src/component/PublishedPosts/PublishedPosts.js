import React, { Component } from 'react';

import PostItem from '../PostItem/PostItem';
import parse from 'html-react-parser';

class PublishedPosts extends Component
{
    render(){
        console.log("PublishedPosts:",this.props.posts );
       let filterdPosts = this.props.posts.filter(
           (post)=>{
               return (post.postTitle.toLowerCase().indexOf(this.props.searchText.toLowerCase()) !==-1 ||
               post.postBody.toLowerCase().indexOf(this.props.searchText.toLowerCase()) !==-1);
           }
       );
        return(
            <div>
                {filterdPosts.map((post,index)=>{
                    return <PostItem
                         title={post.postTitle}
                         body={parse(post.postBody) }
                         key={index}
                         ></PostItem>
                })}
            </div>
        );
    }
}

export default PublishedPosts;