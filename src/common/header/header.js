import React from "react";
import { Grid, TextField, Typography, InputAdornment } from "@material-ui/core";
import { Search, Face } from "@material-ui/icons";
import avatar from '../../assets/download.png';
import "./header.css";

const Header = props => {
  return (
    <header>
      <div className="header-container">
        <div className="header-title">
          Image Viewer
        </div>

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
            <img src={avatar} />
          </div>
        </div>
      </div>
      {/* <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography>Image Viewer</Typography>
        </Grid>
        {props.isUser ? (<>
        <Grid item>
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
          
        </Grid>
        <Face /></>
        ) :null}
      </Grid> */}
    </header>
  );
};

export default Header;
