import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateLoanAmt, updateMonthlyMort } from '../../reducer/reducer';

class Wizard4 extends Component {

  render() {
    const { updateLoanAmt, updateMonthlyMort } = this.props;

    return (
      <div className="wizard4_container">
        <div className="header">
          <div className="header_content">
            <div className="header_left_container">
              <img src="https://github.com/DevMountain/simulation-2/blob/master/assets/houser_logo.png?raw=true" alt=""/>
              <span className="header_left_span">Houser</span>
              <span className="header_left_span fontW">Dashboard</span>
            </div>
              <div className="header_right_container">
                <Link to={'/'}><span class="header_right_span">Logout</span></Link>
              </div>
            </div>
        </div>
          <div className="add_listing_container">
            <span className="add_listing_wording"> Add new listing </span>
            <Link to={'/dashboard'}><button className="cancel_button"> Cancel </button></Link>
          </div>
            <div>
              <span> Loan Amount </span>
              <input onChange={ (e) => updateLoanAmt(e.target.value) }></input>
              <span> Mortgage Amount </span>
              <input onChange={ (e) => updateMonthlyMort(e.target.value) }></input>
            </div>
              <div>
                <Link to={'/wizard/3'}><button> Previous Step </button></Link>
                <Link to={'/wizard/5'}><button> Next Step </button></Link>
              </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { loanAmt, monthlyMort } = state;

    return {
      loanAmt, 
      monthlyMort
    }
}

export default connect(mapStateToProps, {updateLoanAmt, updateMonthlyMort})(Wizard4);