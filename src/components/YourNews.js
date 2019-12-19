import React from "react";
import { connect } from "react-redux";
import { getNYT } from "../actions";
import CatCard from "./CatCard";
import ArticleList from "./ArticleList";

const YourNews = (props) => {
    const testString = 'arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world';

    return (
      <>
        <h2 className="news-title">Choose which category to fetch the top stories</h2>
        <div className="cat-cards">
        {testString.split(',').map((element,index) => {
            return <CatCard key={index} onClick={() => props.getNYT(element.trim())} id={index} name={element} />
        })}
        </div>
        {props.data.length > 0 ? <ArticleList /> : null}
        
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
  )(YourNews);