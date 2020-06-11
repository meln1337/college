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
        return this.props.data.length !== 0 ? <FinancialReport addLink={this.props.addFinancialLinks} data={this.props.data} /> : <div className="container">Loading...</div> 
    }
}

const mapStateToProps = ({ financialReportReducer }) => ({
    data: financialReportReducer.links
});

const mapDispatchToProps = {
    setFinancialLinks: () => setFinancialLinksThunk(),
    addFinancialLinks: ({ link, text }) => addFinancialLinksThunk({ link, text })
}

export default connect(mapStateToProps, mapDispatchToProps)(FinancialReportContainer);