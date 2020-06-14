import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { parse } from 'qs';
import { setDataThunk, changeDataThunk } from '../../redux/actions/schedule.actions';
import SchedulesModal from '../../components/SchedulesModal/SchedulesModal';

class ScheduleModalContainer extends React.Component {
    componentDidMount() {
        if (!this.props.data) {
            this.props.setSchedules({ course: this.props.course, group: this.props.group });
        };
    }

    render() {
        return this.props.data ? 
                                <SchedulesModal 
                                    data={this.props.data} 
                                    course={this.props.course} 
                                    group={this.props.group}
                                    admin={this.props.admin}
                                    changeSchedules={this.props.changeSchedules}
                                /> : <div className="container">Loading...</div>
    }
}

const mapStateToProps = (state, { location }) => {
    debugger;
    const { group, course } = parse(location.search, {
        ignoreQueryPrefix: true
    })

    return {
        data: state.scheduleReducer.schedules?.[course]?.[group],
        admin: state.authReducer.user.admin,
        course,
        group
    }
};

const mapDispatchToProps = {
    setSchedules: ({ course, group }) => setDataThunk({ course, group }),
    changeSchedules: ({ id, date, day, text, course, group }) => changeDataThunk({ id, date, day, text, course, group })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ScheduleModalContainer));