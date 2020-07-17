import React, { Component } from 'react';
import { connect } from 'react-redux';

class SwitchButton extends Component{
    style = {
        backgroundColor:'#f89c4648',
        color:'black'
    }
    styleActive = {
        backgroundColor:'#F89B46',
        color:'white',
        borderColor:'white'
    }

    toggleComponentHandler = (param) =>{
        this.props.btnClick(param);
    }

    headerButtonClickHandler = (param) =>{
    console.log(param);
          switch(param)
           {
               case 'form':
                  //show form
                  this.props.onHeaderButtonClick(true);
                  break;
               case 'posts':
                   //show form
                this.props.onHeaderButtonClick(false);
                  break;
               default:
                   break;
           }
  }

    render(){
        return(
            <div className="head-container">
                <button style={this.props.showNewPostForm?this.styleActive:this.style} onClick={this.headerButtonClickHandler.bind(this,'form')}>New Post</button>
                <button style={this.props.showNewPostForm?this.style:this.styleActive} onClick={this.headerButtonClickHandler.bind(this,'posts')}>Published</button>
                <hr/>
            </div>
        );
    };
}

const mapStateToProps = state =>{
    return{
      search: state.search,
      showNewPostForm: state.showNewPostForm
    };
  };
  
  const mapDispatchToProps = dispatch =>{
    return{
     // onSearch: (searchText) => dispatch({type: 'SEARCH_POST', searchText:searchText }),
      //onClearSearchText: () => dispatch({type: 'CLEAR_SEARCHTEXT'}),
      onHeaderButtonClick: (showForm) => dispatch({type: 'HEADER_BUTTON_CLICK', showForm:showForm})
    };
  };


export default connect(mapStateToProps,mapDispatchToProps) (SwitchButton);