import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Provides a text for the button */
  children?: ReactNode;
  /** Available variants for you to use */
  variant?: 'primary' | 'secondary' | 'tertiary' | undefined;
}
const BaseButton = styled.button<ButtonProps>`
  background: grey;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  padding: 8px 32px;
  color: white;
`;
const ButtonComponent = styled(BaseButton)`
  ${({ variant }): any => {
    if (variant === 'primary') {
      background: '#11521a';
    } else if (variant === 'secondary') {
      background: '#101558';
    } else if (variant === 'tertiary') {
      background: '#663d08';
    } else if (variant === 'default') background: 'grey';
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
