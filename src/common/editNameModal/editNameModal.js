import React, { useState } from "react";
import { Modal, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./editNameModal.css";

function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 250,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));
const EditNameModal = ({ visible, onClose, onUpdate }) => {
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  const saveFullName = () => {
    if (!fullName) {
      setError(true);
    } else {
      onUpdate(fullName);
      setFullName("");
        onClose();
    }
  };

  return (
    <Modal open={visible} onClose={onClose} className="edit-name-modal">
      <div style={modalStyle} className={classes.paper}>
        <div className="modal-title">Edit</div>
        <TextField
          className="form-field"
          required
          error={error && !fullName}
          label="Full Name"
          value={fullName}
          onChange={e => {
            setFullName(e.currentTarget.value);
            setError(false);
          }}
          fullWidth
          helperText={error && !fullName && "required"}
        />
        <Button
          color="primary"
          className="login-button"
          variant="contained"
          onClick={saveFullName}
        >
          UPDATE
        </Button>
      </div>
    </Modal>
  );
};

export default EditNameModal;
