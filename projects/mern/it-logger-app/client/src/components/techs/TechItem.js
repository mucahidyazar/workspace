import React from "react";
import * as actions from "../../store/action/index";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech, onDeleteTech }) => {
  const onDeleteHandler = () => {
    onDeleteTech(tech._id);
    M.toast({ html: "Technician deleted" });
  };

  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content" onClick={onDeleteHandler}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  onDeleteTech: id => dispatch(actions.deleteTech(id))
});

export default connect(null, mapDispatchToProps)(TechItem);
