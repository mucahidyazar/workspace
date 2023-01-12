import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../../store/action/index";
import M from "materialize-css";

const AddTechModal = ({ onAddTech }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "" || email === "" || phone === "") {
      M.toast({ html: "Please enter the first and last name" });
    } else {
      onAddTech({
        firstName,
        lastName,
        email,
        phone
      });
      M.toast({ html: `${firstName} ${lastName} was added as a technician` });
      //Clear Fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="email" className="active">
              Email
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <label htmlFor="phone" className="active">
              Phone
            </label>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect blue waves-green btn"
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  onAddTech: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onAddTech: tech => dispatch(actions.addTech(tech))
});

export default connect(null, mapDispatchToProps)(AddTechModal);
