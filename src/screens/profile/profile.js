import React, { Component } from "react";
import { Fab } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import EditNameModal from "../../common/editNameModal/EditNameModal";
import PostModal from "../../common/postModal/PostModal";
import Header from "../../common/header/Header";
import avatar from "../../assets/download.png";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "Vicky Gupta",
      openEditNameModal: false,
      openSelectedPostModal: false,
      selectedPost: {},
      posts: []
    };
  }

  componentDidMount() {
    //Check if valid auth token
    if (!sessionStorage.userAuth) {
      this.props.history.push("/");
    } else {
      this.setState({
        posts: JSON.parse(localStorage.dataSetMain)
      });
    }
  }

  //handle the edit name modal
  handleEditNameModal = () => {
    this.setState({
      openEditNameModal: !this.state.openEditNameModal
    });
  };

  //Updating the fullname
  saveFullName = updatedName => {
    this.setState({
      fullname: updatedName
    });
  };

  //Open the modal with selected post
  openSelectedPost = (selectedPost, index) => {
    this.setState({
      openSelectedPostModal: true,
      selectedPost: {
        ...selectedPost,
        index: index
      }
    });
  };
  closeSelectedPost = () => {
    this.setState({
      openSelectedPostModal: false,
      selectedPost: {}
    });
  };

  //Updating the post data
  updatePost = updatedPost => {
    const { posts } = this.state;
    const newPost = updatedPost;
    posts[updatedPost.index] = newPost;
    this.setState({
      posts
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
        {openSelectedPostModal ? (
          <PostModal
            selectedPost={selectedPost}
            visible={openSelectedPostModal}
            onClose={() => this.closeSelectedPost()}
            onUpdatePost={updatedPost => this.updatePost(updatedPost)}
          />
        ) : (
          ""
        )}
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
              {posts.map((post, index) => {
                return (
                  <GridListTile
                    key={post.id}
                    onClick={() => this.openSelectedPost(post, index)}
                  >
                    <img src={post.media_url} alt={post.id} />
                  </GridListTile>
                );
              })}
            </GridList>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
