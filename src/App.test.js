import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

useless('useless test', ()=>{
  expect(10+10).toEqual(20)
  expect(true).toEqual(true)
})