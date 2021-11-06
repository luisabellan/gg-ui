import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}
const BaseButton = styled.button<Props>`
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  padding: 8px 32px;
`;

const ButtonComponent = styled(BaseButton)`
  background: ${({ variant }) =>
    variant === 'primary' ? '#11521a' : '#101558'};
  border: none;
  color: white;
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ variant }) =>
      variant === 'primary' ? '#aedfb5' : '#a3a7db'};
    color:'#fff'};
  }
`;

export const Button = ({ children, variant, ...props }: Props) => {
  return (
    <ButtonComponent variant={variant} {...props}>
      {children}
    </ButtonComponent>
  );
};
