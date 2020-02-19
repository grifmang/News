import React from "react";
import { connect } from "react-redux";
import { getNYT } from "../actions";
import ArticleCard from "./ArticleCard";

const ArticleList = (props) => {

    return (
        <>
        {props.data.map((element, index) => {
            return <ArticleCard 
            key={index} 
            img={element.multimedia.length > 0 ? element.multimedia[0].url : require("../images/no-image.jpg")} 
            title={element.title} 
            desc={element.abstract} 
            url={element.short_url} 
            author={element.byline} />
        })}
        </>
    )
}

const mapStateToProps = state => {
    return {
      data: state.data,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { getNYT }
  )(ArticleList);