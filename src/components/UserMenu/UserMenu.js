import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Wrapper, UserData } from './UserMenu.styled';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../Redux/auth/operations';
import LetterAvatars from './Avatar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper>
      <UserData>Welcome, {user.name}</UserData>
      <div>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
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
