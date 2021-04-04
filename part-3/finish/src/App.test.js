import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Let's get this bag/i);
  expect(linkElement).toBeInTheDocument();
});
