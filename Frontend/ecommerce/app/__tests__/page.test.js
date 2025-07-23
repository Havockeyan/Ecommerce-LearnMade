import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home', () => {
  it('renders the Banner image and event text', () => {
    render(<Home />);
    // Check for the Banner image
    const bannerImg = screen.getByAltText('Banner');
    expect(bannerImg).toBeInTheDocument();
    // Check for the first event text
    expect(screen.getByText('🎉 Upcoming Event – Sale this weekend!')).toBeInTheDocument();
  });
}); 