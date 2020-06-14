import React from 'react';
import { connect } from 'react-redux';
import { setFinancialLinksThunk, addFinancialLinksThunk } from '../../redux/actions/financialreport.actions';
import FinancialReport from '../../components/FinancialReport/FinancialReport';

class FinancialReportContainer extends React.Component {
    componentDidMount() {
        debugger;
        if (this.props.data.length === 0) {
            this.props.setFinancialLinks()
        }
    }

    render() {
        return this.props.data.length !== 0 ? <FinancialReport admin={this.props.admin} addLink={this.props.addFinancialLinks} data={this.props.data} /> : <div className="container">Loading...</div> 
    }
}

const mapStateToProps = state => ({
    data: state.financialReportReducer.links,
    admin: state.authReducer.user.admin
});

const mapDispatchToProps = {
    setFinancialLinks: () => setFinancialLinksThunk(),
    addFinancialLinks: ({ link, text }) => addFinancialLinksThunk({ link, text })
}

export default connect(mapStateToProps, mapDispatchToProps)(FinancialReportContainer);