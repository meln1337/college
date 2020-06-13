import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { parse } from 'qs';
import { setDataThunk, changeDataThunk } from '../../redux/actions/zaminy.actions';
import ZaminyPage from '../../components/ZaminyPage/ZaminyPage';

class ZaminyContainer extends React.Component {
    componentDidMount() {
        if (!this.props.data) {
            this.props.setZaminy({ course: this.props.course, group: this.props.group });
        };
    }

    render() {
        console.log(this.props.data)
        return this.props.data ? 
                                <ZaminyPage 
                                    data={this.props.data} 
                                    course={this.props.course} 
                                    group={this.props.group}
                                    changeZaminy={this.props.changeZaminy}
                                /> : <div className="container">Loading...</div>
    }
}

const mapStateToProps = ({ zaminyReducer }, { location }) => {
    const { group, course } = parse(location.search, {
        ignoreQueryPrefix: true
    })

    return {
        data: zaminyReducer.zaminy?.[course]?.[group],
        course,
        group
    }
};

const mapDispatchToProps = {
    setZaminy: ({ course, group }) => setDataThunk({ course, group }),
    changeZaminy: ({ id, date, day, text, course, group }) => changeDataThunk({ id, date, day, text, course, group })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ZaminyContainer));