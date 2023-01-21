import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const UserData = styled.p`
  color: black;
  font-weight: 500;
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
