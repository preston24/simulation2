import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <div className="dashboard_container">
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
          <Link to={'/wizard/1'}><button className="dashboard_add_prop_button">Add new property</button></Link>
            <div className="filter_container">
              <span> List properties with "desired rent" greater than: $</span>
              <input placeholder="0"></input>
              <button className="filter_btn"> Filter </button>
              <button className="reset_btn"> Reset </button>
            </div>
              <div className="home_listing_container">
                <span> Home Listings </span>
              </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;