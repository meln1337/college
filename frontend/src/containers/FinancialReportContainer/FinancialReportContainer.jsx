import React from 'react';
import { connect } from 'react-redux';
import { setFinancialLinksThunk, addFinancialLinksThunk, deleteFinancialLinksThunk } from '../../redux/actions/financialreport.actions';
import FinancialReport from '../../components/FinancialReport/FinancialReport';
import { uploadFileThunk } from '../../redux/actions/uploads.actions';

let first;

class FinancialReportContainer extends React.Component {
    componentDidMount() {
        debugger;
        if (this.props.data.length === 0) {
            this.props.setFinancialLinks()
            first = true
        }
    }

    render() {
        return this.props.data.length !== 0 || first ? 
                                                <FinancialReport 
                                                    uploadFile={this.props.uploadFile} 
                                                    admin={this.props.admin} 
                                                    addLink={this.props.addFinancialLinks} 
                                                    data={this.props.data} 
                                                    deleteLink={this.props.deleteFinancialLink}
                                                /> : <div className="container">Loading...</div> 
    }
}

const mapStateToProps = state => ({
    data: state.financialReportReducer.links,
    admin: state.authReducer.user.admin
});

const mapDispatchToProps = {
    setFinancialLinks: () => setFinancialLinksThunk(),
    addFinancialLinks: ({ link, text }) => addFinancialLinksThunk({ link, text }),
    uploadFile: ({ file, text }) => uploadFileThunk({ file, text }),
    deleteFinancialLink: ({ id }) => deleteFinancialLinksThunk({ id }) 
}

export default connect(mapStateToProps, mapDispatchToProps)(FinancialReportContainer);