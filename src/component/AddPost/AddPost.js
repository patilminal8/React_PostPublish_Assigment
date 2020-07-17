import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const initialState = {
    pTitle:'',
    postText:'',
    postTitleError:'',
    postBodyError:''
}

class AddPost extends Component {
    state = initialState;
    validateForm = () => {
       let postTitleError = '';
       let postBodyError ='';

       postTitleError = (!this.state.pTitle.length)?'Please enter the title of post':'';
       postBodyError = (!this.state.postText.length)?'Please enter the body of post':'';
       
       if(postTitleError)
       {
           this.setState({postTitleError:postTitleError , postBodyError:postBodyError});
           return false;
       }else{
            this.titleStyle = {};
       }

       if(postBodyError)
       {
           this.setState({postTitleError:postTitleError , postBodyError:postBodyError});
           return false;
       }else{
            this.postBodySTyle = {};
       }

       return true;
    }

    handleInput = (event) =>{
        this.setState({pTitle: event.target.value });
    }

    postPublishHandler = (event) => {
        event.preventDefault();
        const isValid = this.validateForm();
        if(isValid)
        {
            //console.log(this.state);
            this.props.onPublishPostHandler(this.state.pTitle,this.state.postText,false );
            this.setState(initialState);
        }     
    }

  render() {
    return (
        <form onSubmit={this.postPublishHandler}>
        <div>
        <br/>
         <input style={(this.state.postTitleError)?{border: '2px solid red'}:{}} type="text" value={this.state.pTitle} onChange={this.handleInput} placeholder="Post title"></input>
         <div style={{color:'red',fontSize:15}}>{this.state.postTitleError}</div>
         </div>
         <br/>
         <div>
         <div style={(this.state.postBodyError)?{border: '2px solid red'}:{}}>
              <CKEditor
                editor={ClassicEditor}
                data=""
                onChange={ ( event, editor ) => {
                const data = editor.getData();
                this.setState({postText: data });
                } }
                value={this.state.postText}
            />
            </div>
          <div style={{color:'red',fontSize:15}}>{this.state.postBodyError}</div><br/>
         <button>Publish</button>
        </div>
    </form>
    )
  }
}

const mapStateToProps = state =>{
    return{
      posts: state.posts,
      search: state.search,
      showNewPostForm: state.showNewPostForm,
      postTitle: state.postTitle,
      postBody: state.postBody,
      postTitleError: state.postTitleError,
      postBodyError: state.postBodyError
    };
  };
  
  const mapDispatchToProps = dispatch =>{
    return{
      onPublishPostHandler: (postTitle, postBody, showNewPostForm) => dispatch({type: 'PUBLISH_POST', postTitle:postTitle, postBody:postBody, showNewPostForm:showNewPostForm })
    };
  };

export default connect(mapStateToProps,mapDispatchToProps) (AddPost);