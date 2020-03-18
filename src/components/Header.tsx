import React from 'react';

export interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => (
  <h1 data-testid="component-hello">{title}</h1>
);
