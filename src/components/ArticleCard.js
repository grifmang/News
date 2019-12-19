import React from "react";

const ArticleCard = (props) => {

    return (
        <div className='article-card'>
            <img className='article-card-img' src={props.img} alt='New York Times article' />
            <div className='article-card-elements'>
                <h3><a href={props.url}>{props.title}</a></h3>
                <h5>{props.author}</h5>
                <p>{props.desc}</p>
                {/* <a href={props.url}>{props.url}</a> */}
            </div>
        </div>
    )
}

export default ArticleCard;