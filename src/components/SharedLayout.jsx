import * as React from 'react';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';
import { useAuth } from '../hooks/useAuth';
import { UserMenu } from '../components/UserMenu/UserMenu';
import { AuthNav } from '../components/AuthNav/AuthNav';
import backGround from '../images/background.jpg';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export const SharedLayout = props => {
  const { isLoggedIn } = useAuth();
  return (
    <React.Fragment>
      <CssBaseline />
      <div
        id="back-to-top-anchor"
        style={{
          width: '100%',
          height: 65,
          position: 'absolute',
          top: 0,
          backgroundColor: 'white',
          borderBottom: '1px solid black',
          zIndex: -1,
          overflow: 'hidden',
        }}
      ></div>
      <Container>
        <Header>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            {isLoggedIn && <Link to="/contacts">Contacts</Link>}
          </nav>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
        <Suspense fallback={null}>
          <Outlet />
          <ScrollTop {...props}>
            <Fab size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Suspense>
      </Container>
      <img
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          position: 'fixed',
          zIndex: -2,
          top: 0,
        }}
        src={backGround}
        alt="BackGround"
      />
    </React.Fragment>
  );
};
