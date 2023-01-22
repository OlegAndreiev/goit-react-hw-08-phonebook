import * as React from 'react';
import { LinkNav } from './AuthNav.styled';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

export const AuthNav = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // <div>
    //   <LinkNav to="/register">Register</LinkNav>
    //   <LinkNav to="/login">Log In</LinkNav>
    // </div>
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        {/* <AccountCircle /> */}
        <Avatar src="/broken-image.jpg" />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <LinkNav to="/register">Register</LinkNav>
        </MenuItem>
        <MenuItem>
          <LinkNav to="/login">Log In</LinkNav>
        </MenuItem>
      </Menu>
    </div>
  );
};
