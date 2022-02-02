import React from 'react';
import './Blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
    return (
        <div className='SellSafe__blog section__padding' id='blog'>
            <div className='SellSafe__blog-heading'>
                <h1 className='gradient__text'>Expert advice and opinions on modern cash flow challenges</h1>
            </div>
            <div className='SellSafe__blog-container'>
                <div className='SellSafe__blog-container_groupA'>
                    <Article imgUrl={blog01} date='Feb 8, 2022' title='This is the title'/>
                </div>
                <div className='SellSafe__blog-container_groupB'>
                    <Article imgUrl={blog02} date='Feb 8, 2022' title='This is the title'/>
                    <Article imgUrl={blog03} date='Feb 8, 2022' title='This is the title'/>
                    <Article imgUrl={blog04} date='Feb 8, 2022' title='This is the title'/>
                    <Article imgUrl={blog05} date='Feb 8, 2022' title='This is the title'/>
                </div>
            </div>
        </div>
    );
};

export default Blog;
