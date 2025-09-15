import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Recipe Gallery app UI elements', () => {
  render(<App />);
  expect(screen.getByText(/Recipe Gallery/i)).toBeInTheDocument();
  expect(screen.getByRole('searchbox', { name: /search recipes/i })).toBeInTheDocument();
  expect(screen.getByRole('group', { name: /filter by category/i })).toBeInTheDocument();
  // Check at least one recipe card content
  expect(screen.getAllByRole('article').length).toBeGreaterThan(0);
  expect(screen.getByRole('button', { name: /let’s cook/i })).toBeInTheDocument();
});
