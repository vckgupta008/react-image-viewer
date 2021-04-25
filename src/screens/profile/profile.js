import React, { Component } from "react";
import Header from "../../common/header/header";
import avatar from '../../assets/download.png';
import "./profile.css";

class Profile extends Component {
  render() {
    return (
      <>
        <Header isUser />
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-avatar">
                      <img src={avatar} />  
                </div>
                <div className="profile-info">
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
}

export default Profile;
