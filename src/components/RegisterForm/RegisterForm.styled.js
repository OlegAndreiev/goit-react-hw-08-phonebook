import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
export const RegisterBtn = styled.button`
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
