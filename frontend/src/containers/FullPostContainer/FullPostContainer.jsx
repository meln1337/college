import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from '../../../../backend/routes/post.routes';

class FullPostContainer extends React.Component {
    componentDidMount() {
        if (!this.props.post) {
            this.props.setPost(this.props.postId)
        }
    }

    render() {
        return this.props.post ? <div /> : 'Loading'
    }
}

const mapStateToProps = ({ newsReducer }, { match }) => ({
    post: newsReducer.post[match.params.id],
    postId: match.params.id
})

export default withRouter(connect(mapStateToProps, null)(FullPostContainer));