import React from 'react';
import { connect } from 'react-redux';
import Rights from '../../components/Rights/Rights';
import { setRights, addRight, deleteRightThunk } from '../../redux/actions/right.actions';

let first;

class FinancialReportContainer extends React.Component {
    componentDidMount() {
        debugger;
        if (this.props.data.length === 0) {
            this.props.setRights()
            first = true;
        }
    }

    render() {
        return this.props.data.length || first !== 0 ? 
                                                <Rights 
                                                    admin={this.props.admin} 
                                                    addRight={this.props.addRight} 
                                                    data={this.props.data}
                                                    deleteRight={this.props.deleteRight}
                                                    from={this.props.from}
                                                /> : <div className="container">Loading...</div> 
    }
}

const mapStateToProps = state => ({
    data: state.rightReducer.rights,
    admin: state.authReducer.user.admin,
    from: state.languageReducer.from
});

const mapDispatchToProps = {
    setRights: () => setRights(),
    addRight: right => addRight(right),
    deleteRight: ({ id }) => deleteRightThunk({ id })
}

export default connect(mapStateToProps, mapDispatchToProps)(FinancialReportContainer);