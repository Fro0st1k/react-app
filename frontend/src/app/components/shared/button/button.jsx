import React from 'react';
import { StyledButton } from './button.styled';

export const Button = ({ onClick, ...props }) => {
  const { children } = props;
  return (
    <StyledButton onClick={onClick} type="button">
      {children}
    </StyledButton>
  );
};
