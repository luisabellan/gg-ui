import React, { ReactNode } from 'react';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}

export const Button = ({ children, variant, ...props }: Props) => {
  return <button {...props}>{children}</button>;
};
