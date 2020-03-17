import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { Hello } from './Hello';

test('should render Hello component with the text to Hello from TypeScript and React! ', () => {
  const { getByTestId } = render(
    <Hello compiler="TypeScript" framework="React" />
  );

  expect(getByTestId('component-hello')).toHaveTextContent(
    'Hello from TypeScript and React!'
  );
});
