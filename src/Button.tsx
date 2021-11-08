import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Provides a text for the button */
  children?: ReactNode;
  /** Available variants for you to use */
  variant?: 'primary' | 'secondary' | undefined;
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
  background: ${({ variant }) => {
    if (variant === 'primary') {
      return '#11521a';
    }
    if (variant === 'secondary') {
      return '#101558';
    }
    return 'grey';
  }};

  color: ${({ color }) => (color ? color : 'white')};

  border: none;
  font-weight: 600;
  transition: all 0.2s ease-in-out;


`;
/** This is our Button */
export function Button({ color, children, variant, ...props }: ButtonProps) {
  return (
    <ButtonComponent color={color} variant={variant} {...props}>
      {children = "send"}
    </ButtonComponent>
  );
};
