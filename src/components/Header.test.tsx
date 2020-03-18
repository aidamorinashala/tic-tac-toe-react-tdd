import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { Header } from './Header';

test('should render Header component with the text TIC TAC TOE', () => {
  const { getByTestId } = render(<Header title="TIC TAC TOE" />);

  expect(getByTestId('component-hello')).toHaveTextContent('TIC TAC TOE');
});
