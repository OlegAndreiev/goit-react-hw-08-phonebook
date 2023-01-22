import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';
import { useAuth } from '../hooks/useAuth';
import { UserMenu } from '../components/UserMenu/UserMenu';
import { AuthNav } from '../components/AuthNav/AuthNav';
import backGround from '../images/background.png';
export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
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
        </Suspense>
      </Container>
      <img
        style={{
          width: '100%',
          // maxWidth: '100%',
          // height: '100%',
          display: 'block',
          position: 'fixed',
          zIndex: -1,
          top: 0,
        }}
        src={backGround}
        alt="BackGround"
      />
    </>
  );
};
