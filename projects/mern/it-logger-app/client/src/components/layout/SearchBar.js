import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../../store/action/index";

const SearchBar = ({ onSearchLogs }) => {
  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              autoComplete="off"
              placeholder="Search Logs"
              onChange={e => onSearchLogs(e.target.value)}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

const mapDispatchToProps = dispatch => ({
  onSearchLogs: value => dispatch(actions.searchLogs(value))
});

SearchBar.propTypes = {
  onSearchLogs: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(SearchBar);
