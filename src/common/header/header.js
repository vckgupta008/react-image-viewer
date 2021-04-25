import { Grid, TextField, Typography, InputAdornment } from "@material-ui/core";
import { Search, Face } from "@material-ui/icons";
import React from "react";
import "./header.css";

const Header = props => {
  return (
    <header>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography>Image Viewer</Typography>
        </Grid>
        {props.isUser ? (
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
          <Face />
        </Grid>
        ) :null}
      </Grid>
    </header>
  );
};

export default Header;
