import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../store/action/index";

import TechItem from "./TechItem";

const TechListModal = ({ onGetTechs, techs: { techs, loading } }) => {
  useEffect(() => {
    onGetTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem tech={tech} key={tech._id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  techs: PropTypes.object.isRequired,
  onGetTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  techs: state.techs
});

const mapDispatchToProps = dispatch => ({
  onGetTechs: () => dispatch(actions.getTechs())
});

export default connect(mapStateToProps, mapDispatchToProps)(TechListModal);
