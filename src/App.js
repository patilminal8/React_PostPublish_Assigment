
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './component/Button/Button';
import AddPost from './component/AddPost/AddPost';
import InstantSearch from './component/InstantSearch/InstantSearch'; 
import SwitchButton from './component/SwitchButton/SwitchButton'; 
import PublishedList from './component/PublishedPosts/PublishedPosts';
import './App.css';

class App extends Component {
 
  render() {

    return(
      <div className="App">
      <div className ="App-container">
        <h1>Add Post and Publish Application</h1>
        <InstantSearch clearClicked = {this.clearSearchHandler}/>
        <SwitchButton btnActive = {this.props.showNewPostForm}
          btnClick = {this.headerButtonClickHandler}/>
        <hr />
        {
     this.props.showNewPostForm?
          <AddPost />
              :
        <PublishedList
        searchText={this.props.search}
        posts={this.props.posts}>
        </PublishedList>
      
  }
      </div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    posts: state.posts,
    search: state.search,
    showNewPostForm: state.showNewPostForm
  };
};

export default connect(mapStateToProps) (App);
