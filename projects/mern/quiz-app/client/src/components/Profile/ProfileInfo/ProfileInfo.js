import React from "react";
import moment from "moment";

//REDUX CONNECTION
import { connect } from "react-redux";
//REDUX ACTIONS
import { addAvatar } from "../../../redux/actions";

function ProfileInfo({ dispatch, user }) {
  const handlerAddImage = (e) => {
    const data = new FormData();
    data.append("upload-avatar", e.target.files[0]);
    dispatch(addAvatar(data));
  };

  return (
    <div className="info">
      <div className="info__photo">
        <img src={`data:image/jpg;base64,${user.avatar}`} alt=""></img>

        <div className="info__photo--group">
          <div className="info__photo--name">@{user.username}</div>
          <div className="info__photo--upload">
            <input
              type="file"
              className="info__photo--file"
              id="upload-avatar"
              onChange={handlerAddImage}
            />
            <label htmlFor="upload-avatar">
              <i className="fas fa-camera-retro"></i>
            </label>
          </div>
        </div>
      </div>
      <span className="info__info">Registered on April 26(Add Last Login)</span>
      <div className="info__body">
        <div className="info__body--title">Profile Info</div>
        <div className="info__body--body">
          <div className="info__group">
            <div className="info__group--title">Firstname</div>
            <div className="info__group--item">{user.firstName}</div>
          </div>
          <div className="info__group">
            <div className="info__group--title">Lastname</div>
            <div className="info__group--item">{user.lastName}</div>
          </div>
          <div className="info__group">
            <div className="info__group--title">Email</div>
            <div className="info__group--item">{user.email}</div>
          </div>
          <div className="info__group">
            <div className="info__group--title">Gender</div>
            <div className="info__group--item">{user.gender}</div>
          </div>
          <div className="info__group">
            <div className="info__group--title">Birthday</div>
            <div className="info__group--item">
              {moment(user.birthday).format("LL")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(ProfileInfo);
