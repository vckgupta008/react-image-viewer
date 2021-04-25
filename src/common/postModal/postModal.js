import React, { Component } from "react";
import { Modal, Button, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import avatar from "../../assets/download.png";
import "./postModal.css";

const useStyles = theme => ({
  paper: {
    position: "absolute",
    width: "50%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
});

class PostModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postDetails: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("next props", nextProps.selectedPost);
    this.setState({
      postDetails: nextProps.selectedPost
    });
  }

  render() {
    const {
      visible,
      onClose,
      onUpdateLikes,
      onUpdateComment,
      classes
    } = this.props;

    const {postDetails}=this.state;

    console.log(postDetails);
    return (
      <Modal open={visible} onClose={onClose} className="post-modal">
       <div
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
          id="post-container"
          className={classes.paper}
        >
          <div className="post-img">
            <img src={postDetails&&postDetails.media_url} alt="img" />
          </div>
          <div className="post-info">

          </div>
        </div>
      </Modal>
    );
  }
}

export default withStyles(useStyles)(PostModal);
