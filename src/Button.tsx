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
  background: #353434;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  padding: 8px 32px;
  color: white;
`;

const ButtonComponent = styled(BaseButton)`
  border: none;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  background: ${({ variant }) => {
    if (variant === 'primary') {
      return '#11521a';
    } else if (variant === 'secondary') {
      return '#101558';
    } else if (variant === 'tertiary') {
      return '#663d08';
    } else if (variant === 'default') {
      return 'grey';
    } else {
      return
    }

  }};
  


`;
/** This is our Button */
export function Button({  color, children, variant, ...props }: ButtonProps) {
  return (
    <ButtonComponent color={color||'white'} variant={variant} {...props}>
      {children || "send"}
    </ButtonComponent>
  );
};
