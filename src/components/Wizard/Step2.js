import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateAddress, updateCity, updateState, updateZip } from '../../reducer/reducer';

class Wizard2 extends Component {

  render() {
    const { updateAddress, updateCity, updateState, updateZip } = this.props;
    
    return (
        <div className="wizard2_container">
          <div className="header">
            <div className="header_content">
             <div className="header_left_container">
              <img src="https://github.com/DevMountain/simulation-2/blob/master/assets/houser_logo.png?raw=true" alt=""/>
              <span className="header_left_span">Houser</span>
              <span className="header_left_span fontW">Dashboard</span>
            </div>
              <div class="header_right_container">
                <Link to={'/'}><span class="header_right_span">Logout</span></Link>
              </div>
            </div>
          </div>
            <div className="add_listing_container">
              <span className="add_listing_wording"> Add new listing </span>
              <Link to={'/dashboard'}><button className="cancel_button"> Cancel </button></Link>
            </div>
              <div>
                <span> Address </span>
                <input onChange={ (e) => updateAddress(e.target.value) }></input>
                <span> City </span>
                <input onChange={ (e) => updateCity(e.target.value) }></input>
                <span> State </span>
                <input onChange={ (e) => updateState(e.target.vlaue) }></input>
                <span> Zip </span>
                <input onChange={ (e) => updateZip(e.target.value) }></input>
              </div>
              <div>
                <Link to={'/wizard/1'}><button> Previous Step </button></Link>
                <Link to={'/wizard/3'}><button> Next Step </button></Link>
              </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  const { address, city, prop_state, zip } = state;

    return {
      address,
      city,
      prop_state,
      zip
    }
}

export default connect(mapStateToProps, {updateAddress, updateCity, updateState, updateZip})(Wizard2);