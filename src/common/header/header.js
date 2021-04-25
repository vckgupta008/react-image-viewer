import React from "react";
import {
  TextField,
  Button,
  Menu,
  MenuItem,
  InputAdornment
} from "@material-ui/core";
import { Search, Face } from "@material-ui/icons";
import avatar from "../../assets/download.png";
import "./header.css";

const Header = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header>
      <div className="header-container">
        <div className="header-title">Image Viewer</div>

        <div className="header-action">
          <TextField
            id="input-with-icon-textfield"
            placeholder="Search..."
            variant="filled"
            value={props.value}
            onChange={props.onChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              )
            }}
          />
          <div className="avatar">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <img src={avatar} />
            </Button>
            <Menu
              id="simple-menu"
              elevation={0}
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
            >
              <MenuItem onClick={handleClose}>My Account</MenuItem>
              <hr />
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
