import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { parse } from 'qs';
import { setDataThunk, changeDataThunk } from '../../redux/actions/consultation.actions';
import ConsultationModal from '../../components/ConsultationModal/ConsultationModal';

class ConsultationContainer extends React.Component {
    componentDidMount() {
        if (!this.props.data) {
            this.props.setConsultation({ group: this.props.group });
        };
    }

    render() {
        return this.props.data ? 
                                <ConsultationModal 
                                    data={this.props.data} 
                                    group={this.props.group}
                                    changeConsultation={this.props.changeConsultation}
                                    admin={this.props.admin}
                                /> : <div className="container">Loading...</div>
    }
}

const mapStateToProps = (state, { location }) => {
    debugger;
    const { group } = parse(location.search, {
        ignoreQueryPrefix: true
    })

    return {
        data: state.consultationReducer.consultation[group],
        admin: state.authReducer.user.admin,
        group
    }
};

const mapDispatchToProps = {
    setConsultation: ({ group }) => setDataThunk({ group }),
    changeConsultation: ({ id, date, day, text, group }) => changeDataThunk({ id, date, day, text, group })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConsultationContainer));