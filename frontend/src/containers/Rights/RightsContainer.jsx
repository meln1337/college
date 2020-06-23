import React from 'react';
import { connect } from 'react-redux';
import Rights from '../../components/Rights/Rights';
import { setRights, addRight } from '../../redux/actions/right.actions';

class FinancialReportContainer extends React.Component {
    componentDidMount() {
        debugger;
        if (this.props.data.length === 0) {
            this.props.setRights()
        }
    }

    render() {
        return this.props.data.length !== 0 ? 
                                                <Rights 
                                                    admin={this.props.admin} 
                                                    addRight={this.props.addRight} 
                                                    data={this.props.data} 
                                                /> : <div className="container">Loading...</div> 
    }
}

const mapStateToProps = state => ({
    data: state.rightReducer.rights,
    admin: state.authReducer.user.admin
});

const mapDispatchToProps = {
    setRights: () => setRights(),
    addRight: right => addRight(right)
}

export default connect(mapStateToProps, mapDispatchToProps)(FinancialReportContainer);