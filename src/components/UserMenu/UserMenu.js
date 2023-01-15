import { useDispatch } from 'react-redux';
import { Wrapper, UserData, UserMenuBtn } from './UserMenu.styled';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../Redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserData>Welcome, {user.name}</UserData>
      <UserData>{user.email}</UserData>
      <UserMenuBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuBtn>
    </Wrapper>
  );
};
