import React from 'react';
import useStyles from './style';

const Header = (props) => {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            Image Viewer
        </header>
    )
};

export default Header;
