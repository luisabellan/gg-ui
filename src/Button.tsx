import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Provides a text for the button */
  children?: ReactNode;
  /** Available variants for you to use */
  background?: 'primary' | 'secondary' | 'tertiary' | 'default';
}
const BaseButton = styled.button<ButtonProps>`
  background: ${({ background }) => {
    if (background === 'primary') {
      return '#11521a';
    } else if (background === 'secondary') {
      return '#101558';
    } else if (background === 'tertiary') {
      return '#663d08';
    } else if (background === 'default') {
      return '#353434';
    } else {
      return '#353434';
    }
  }};

  color: ${({ color }) => color || 'white'};

  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  padding: 8px 32px;
`;

const ButtonComponent = styled(BaseButton)`
  border: none;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
background: ${
  ({ background }) => {
    if (background === 'primary') {
      return '#11521a';
    } else if (background === 'secondary') {
      return '#101558';
    } else if (background === 'tertiary') {
      return '#663d08';
    } else if (background === 'default') {
      return 'grey';
    } else {
      return
    }

  }};
  


`;
/** This is our Button */
export function Button({ color, children, background, ...props }: ButtonProps) {
  return (
    <ButtonComponent color={color} background={background} {...props}>
      {children || "send"}
    </ButtonComponent>
  );
};
