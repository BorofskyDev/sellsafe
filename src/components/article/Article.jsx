import React from 'react';
import './Article.css'

const Article = ({ imgUrl, date, title }) => {
    return (
        <div className='SellSafe__blog-container_article'>
            <div className='SellSafe__blog-container_article-image'>
                <img src={imgUrl} alt='blog' />
            </div>
            <div className='SellSafe__blog-container_article-content'>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    );
};

export default Article;
