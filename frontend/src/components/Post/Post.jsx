import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const cutString = s => s.length > 150 ? `${s.substring(0, 147)}...` : s;

export default ({ post, from }) => (
    <div className="post" style={{ backgroundImage: `url(${post.img})` }}>
        <div className="inner">
            <span className="date">{post.date}</span>
            <p className="post-head">{post.head}</p>
            <div className="post-bottom">
                <p className="post-text">{cutString(post.text)}</p>
                <Link to={post.link ? post.link : `/posts/${post._id}`} className="post-button">{from === 'UA' ? 'Детальніше' : 'More'}</Link>
            </div>
        </div>
    </div>
);