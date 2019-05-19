import React from 'react';
import styled from 'styled-components';

const DefaultButton = styled.button(props => ({
  height: '30px',
  width: '150px',
  backgroundColor: props.theme.blockColors.mainContrastColor,
  textTransform: 'uppercase',
  position: 'absolute',
  cursor: 'pointer',
  right: 0,
  bottom: 0,
  color: props.theme.fontColors.mainFontColor,
  fontSize: '14px',
  borderRadius: '2px',
  fontWeight: 500,
  letterSpacing: '0.06em',
  ':hover': {
    backgroundColor: props.theme.blockColors.mainContrastColorHover
  }
}));

export const Button = ({ onClick, ...props }) => {
  const { children } = props;
  return (
    <DefaultButton onClick={onClick} type="button">
      {children}
    </DefaultButton>
  );
};
