import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home', () => {
  it('renders the Next.js logo', () => {
    render(<Home />);
    expect(screen.getByAltText('Next.js logo')).toBeInTheDocument();
  });

  it('renders the Get started by editing text', () => {
    render(<Home />);
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
  });
}); 