import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './search.png';
import Clear from './clear.png';

import './InstantSearch.css';

class InstantSearch extends Component{

  //search posts based on user input
  searchInputChangeHandler = (event) =>{
    this.props.onSearch(event.target.value.substr(0,20));
    //console.log(event.target.value);
  }

 //clear searchbox
 clearSearchHandler = () =>{
        this.props.onClearSearchText();
        }

    render(){
        return(
            <div className="head-container">
                <div className="customSearch">
                <img className="customSearch-img-left" src={Search} alt=""></img>
                <input  type="text" value={this.props.search} onChange={this.searchInputChangeHandler}></input>
                <img className="customSearch-img-right" src={Clear} alt="" onClick={this.props.clearSearchHandler}></img>
                </div>
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
      onSearch: (searchText) => dispatch({type: 'SEARCH_POST', searchText:searchText }),
      onClearSearchText: () => dispatch({type: 'CLEAR_SEARCHTEXT'}),
      //onHeaderButtonClick: (showForm) => dispatch({type: 'HEADER_BUTTON_CLICK', showForm:showForm})
    };
  };


export default connect(mapStateToProps,mapDispatchToProps) (InstantSearch);