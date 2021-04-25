import React, { Component } from "react";
import { Fab } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import EditNameModal from "../../common/editNameModal/editNameModal";
import PostModal from "../../common/postModal/postModal";
import Header from "../../common/header/header";
import avatar from "../../assets/download.png";
import "./profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "Vicky Gupta",
      openEditNameModal: false,
      openSelectedPostModal: false,
      selectedPost: {},
      posts: [
        {
          id: "17914978075280650",
          media_type: "CAROUSEL_ALBUM",
          media_url:
            "https://scontent.cdninstagram.com/v/t51.2885-15/50890091_145134333162385_1575083287405871725_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=0IcQV8XTaT0AX_MBFEq&_nc_ht=scontent.cdninstagram.com&oh=4a24679e0424bc47f5053e0e6f19b89f&oe=60AA2F96",
          username: "somya.summi",
          timestamp: "2019-02-12T16:07:23+0000"
        },
        {
          id: "17997724777263783",
          media_type: "CAROUSEL_ALBUM",
          media_url:
            "https://scontent.cdninstagram.com/v/t51.2885-15/70352771_141261790465719_2947905106429861981_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=PlvyBK5kKU8AX-aQTqZ&_nc_ht=scontent.cdninstagram.com&oh=1b9710212f23a83e76141fd5c6d6ae97&oe=60A9877D",
          username: "somya.summi",
          timestamp: "2019-10-07T15:58:33+0000"
        },
        {
          id: "17856234643778689",
          media_type: "CAROUSEL_ALBUM",
          media_url:
            "https://scontent.cdninstagram.com/v/t51.2885-15/84569573_191405035598382_1329757645482833876_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=fSAZuV3PXGQAX_Nd4C_&_nc_ht=scontent.cdninstagram.com&oh=8ee30d5f7deda6bf93f1c6898a898313&oe=60AA1FC1",
          username: "somya.summi",
          timestamp: "2020-02-11T07:02:05+0000"
        },
        {
          id: "17921112409429366",
          media_type: "CAROUSEL_ALBUM",
          media_url:
            "https://scontent.cdninstagram.com/v/t51.29350-15/111119622_1179117219137373_3261375636624685940_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=UISZjKM4GxIAX9LoCY4&_nc_ht=scontent.cdninstagram.com&oh=e34f49eec1ddfffd5e634420d03e35da&oe=60A7D47C",
          username: "somya.summi",
          timestamp: "2020-07-18T20:13:07+0000"
        },
        {
          id: "17904000214522433",
          media_type: "CAROUSEL_ALBUM",
          media_url:
            "https://scontent.cdninstagram.com/v/t51.29350-15/118702473_4237732872968665_5244809759490456506_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=7Qh8gQX_yecAX8rsAGq&_nc_oc=AQnFvtkSCiDbpDihXCyn3DlHX78r5ETUtWbGXxiMo0CPTE7b8MDgpSbA2xkfqvVt1DwyYMP_wLdLhH8PphtU3ghX&_nc_ht=scontent.cdninstagram.com&oh=22efc80fec5f46db0dd723d8f4ed05fc&oe=60A838CB",
          username: "somya.summi",
          timestamp: "2020-09-01T06:44:59+0000"
        }
      ]
    };
  }

  componentDidMount() {
    if (!sessionStorage.userAuth) {
      this.props.history.push("/");
    }
    else {
        
    }
  }

  handleEditNameModal = () => {
    this.setState({
      openEditNameModal: !this.state.openEditNameModal
    });
  };

  saveFullName = updatedName => {
    this.setState({
      fullname: updatedName
    });
  };
  openSelectedPost = selectedPost => {
    this.setState({
      openSelectedPostModal: true,
      selectedPost
    });
  };
  closeSelectedPost = () => {
    this.setState({
      openSelectedPostModal: false,
      selectedPost: {}
    });
  };

  render() {
    const {
      fullname,
      posts,
      openEditNameModal,
      openSelectedPostModal,
      selectedPost
    } = this.state;

    return (
      <>
        <EditNameModal
          visible={openEditNameModal}
          onClose={() => this.handleEditNameModal()}
          onUpdate={updatedName => this.saveFullName(updatedName)}
        />
        <PostModal
          selectedPost={selectedPost}
          visible={openSelectedPostModal}
          onClose={() => this.closeSelectedPost()}
          onUpdateLikes={() => console.log()}
          onUpdateComment={() => console.log()}
        />
        <Header isProfile props={this.props} />
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="profile-info">
              <div className="profile-username">vicky.gupta</div>
              <div className="profile-information">
                <span>Posts: 16</span>
                <span>Follows: 2</span>
                <span>Followed By: 6</span>
              </div>
              <div className="profile-fullname">
                {fullname}
                <Fab
                  color="secondary"
                  aria-label="edit"
                  onClick={() => this.handleEditNameModal()}
                >
                  <EditIcon />
                </Fab>
              </div>
            </div>
          </div>
          <div className="profile-body">
            <GridList cellHeight={180} className="grid-list">
              {posts.map(post => (
                <GridListTile
                  key={post.id}
                  onClick={() => this.openSelectedPost(post)}
                >
                  <img src={post.media_url} alt={post.id} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
