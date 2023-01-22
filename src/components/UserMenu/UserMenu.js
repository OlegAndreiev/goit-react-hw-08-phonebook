import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Wrapper, UserData, UserMenuBtn } from './UserMenu.styled';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../Redux/auth/operations';
import LetterAvatars from './Avatar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

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
    <Wrapper>
      <UserData>Welcome, {user.name}</UserData>
      {/* <UserData>{user.email}</UserData> */}
      {/* <UserMenuBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuBtn> */}
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
          <LetterAvatars userName={user.name} />
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
          style={{ overflow: 'visible' }}
        >
          <MenuItem onClick={() => dispatch(logOut())}>Logout</MenuItem>
        </Menu>
      </div>
    </Wrapper>
  );
};
