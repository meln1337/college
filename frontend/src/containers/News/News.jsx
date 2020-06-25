import React, { Component } from 'react'
import { parse } from 'qs';
import Posts from '../../pages/Posts/Posts'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './News.css'
import { setPostsThunk } from '../../redux/actions/news.actions';

class News extends Component {
    componentDidMount() {
        console.log(this.props)
        const { page } = parse(this.props.location.search, {
            ignoreQueryPrefix: true
        });
        if (this.props.posts.length === 0) {
            page ? this.props.setPosts({ page: parseInt(page) }) : this.props.setPosts({ page: 1 })
        }
    }

    render() {
        return (
            <div className="news">
                <div className="container">
                    <h1 className="head-text">{this.props.from === 'UA' ? 'Новини' : 'News'}</h1>
                    {this.props.posts ? <Posts from={this.props.from} posts={this.props.posts} /> : 'Loading...'}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ newsReducer, languageReducer }) => ({
    posts: newsReducer.posts,
    from: languageReducer.from
})

const mapDispatchToProps = {
    setPosts: ({ page }) => setPostsThunk({ page })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(News));
