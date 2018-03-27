import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateDesiredRent } from '../../reducer/reducer';

class Wizard5 extends Component {

  render() {
    const { updateDesiredRent } = this.props;

    return (
      <div className="wizard5_container">
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
              <span> Desired Rent </span>
              <input onChange={ (e) => updateDesiredRent(e.target.value) }></input>
            </div>
              <div>
                <Link to={'/wizard/4'}><button> Previous Step </button></Link>
                <button> Complete </button>
              </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { desiredRent } = state;

    return {
      desiredRent
    }
}

export default connect(mapStateToProps, {updateDesiredRent})(Wizard5);