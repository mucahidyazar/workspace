import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTechs } from "../../store/action/index";

const TechSelectOptions = ({ onGetTechs, techs: { techs, loading } }) => {
  useEffect(() => {
    onGetTechs();
    // eslint-disable-next-line
  }, []);
  return (
    !loading &&
    techs !== null &&
    techs.map((t, index) => (
      <option key={index + 1} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  techs: PropTypes.object.isRequired,
  onGetTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  techs: state.techs
});

const mapDispatchToProps = dispatch => ({
  onGetTechs: () => dispatch(getTechs())
});

export default connect(mapStateToProps, mapDispatchToProps)(TechSelectOptions);
