import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileStats from "./ProfileStats/ProfileStats";
import ProfileBadges from "./ProfileBadges/ProfileBadges";
import ProfileQuizes from "./ProfileQuizes/ProfileQuizes";
import Spinner from "../Spinner/Spinner";

//REDUX CONNECTION
import { connect } from "react-redux";
//REDUX ACTIONS
import {} from "../../redux/actions";

function Profile({ user }) {
  return user ? (
    <div className="profile">
      <ProfileInfo user={user} />
      <ProfileStats user={user} />
      <ProfileBadges />
      <ProfileQuizes quizes={user.quizes} />
    </div>
  ) : (
    <Spinner />
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Profile);
//Question Mark
//<i class="fas fa-question-circle"></i>
