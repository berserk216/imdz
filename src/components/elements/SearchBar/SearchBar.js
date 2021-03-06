import React, { Component } from "react";
import PropTypes from "prop-types";
// import FontAwesome from "react-fontawesome";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    value: ""
  };
  // Must have this here so we can reset it
  timeout = null;

  doSearch = event => {
    const value = event.target.value;
    this.setState({ value });
    clearTimeout(this.timeout);
    // Set a timeout to wait for the user to stop writing
    // So we don´t have to make unnessesary calls
    this.timeout = setTimeout(() => {
      this.props.callback(value);
    }, 500);
  };

  render() {
    // ES6 Destructuring state
    const { value } = this.state;

    return (
      <div className="rmdb-searchbar">
        {/* <div className="tmdb-logo">
          <img
            className="rmdb-tmdb"
            src="/images/tmdb_logo.png"
            alt="tmdb-logo"
          />
        </div> */}
        <div className="rmdb-searchbar-content">
          <input
            type="text"
            className="rmdb-searchbar-input"
            placeholder="Search Movie Title..."
            onChange={this.doSearch}
            value={value}
          />
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  callback: PropTypes.func
};

export default SearchBar;
