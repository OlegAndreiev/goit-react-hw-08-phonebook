import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserData = styled.p`
  font-weight: 700;
`;
export const UserMenuBtn = styled.button`
  margin: 0 auto;
  background-color: white;
  border-radius: 7%;
  font-weight: 500;
  &:focus,
  &:hover {
    background-color: lightgreen;
    outline: transparent;
  }
`;
