import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateName, updateDescription } from '../../reducer/reducer';

class Wizard1 extends Component {

  render() {
    const { updateName, updateDescription } = this.props;

    return (
        <div className="wizard1_container">
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
              <div className="new_listing_info">
                <span> Property Name </span>
                <input onChange={ (e) => updateName(e.target.value) }></input>
                <span> Property Description </span>
                <textarea onChange={ (e) => updateDescription(e.target.value) }></textarea>
              </div>
                <div>
                  <Link to={'/wizard/2'}><button className="next_step_btn"> Next step </button></Link>
                </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  const { name, description } = state;

    return {
      name,
      description
    }
}

export default connect(mapStateToProps, {updateName, updateDescription})(Wizard1);