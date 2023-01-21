import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';
import { useAuth } from '../hooks/useAuth';
import { UserMenu } from '../components/UserMenu/UserMenu';
import { AuthNav } from '../components/AuthNav/AuthNav';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
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
  );
};
