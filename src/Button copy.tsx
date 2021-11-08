import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Provides a text for the button */
  children?: ReactNode;
  /** Available variants for you to use */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'default';
}

const BaseButton = styled.button<ButtonProps>`
    background: '#353434';
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    padding: 8px 32px;
    color: white;
`;

const ButtonComponent = styled(BaseButton)`
  background: ${({ variant }) => {
    if (variant === 'primary') {
      '#11521a';
    } else if (variant === 'secondary') {
      '#101558';
    } else if (variant === 'tertiary') {
      '#663d08';
    } else if (variant === 'default' || undefined) {
      'grey';
    }
  }};
`;


/** This is our Button */
export function Button({ color, children = 'send', variant, ...props }: ButtonProps) {
  return (
    <ButtonComponent color={color} variant={variant} {...props}>
      {children}
    </ButtonComponent>
  );
};
