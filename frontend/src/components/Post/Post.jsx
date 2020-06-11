import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const cutString = s => s.length > 100 ? `${s.substring(0, 97)}...` : s;

export default ({ post }) => (
    <div className="post" style={{ backgroundImage: `url(${post.img})` }}>
        <div className="inner">
            <span className="date">{post.date}</span>
            <p className="post-head">{post.head}</p>
            <div className="post-bottom">
                <p className="post-text">{cutString(post.text)}</p>
                <Link to={`/posts/${post._id}`} className="post-button">Детальніше</Link>
            </div>
        </div>
    </div>
);