import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("to do list header is rendered", () => {
  render(<App />);
  let element = screen.getByText("To Do");
  expect(element).toBeInTheDocument();
})
