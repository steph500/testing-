import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import messages from './messages';

describe('<messages />', () => {
  test('should mount', () => {
    render(<messages />);

    const messages = screen.getByTestId('messages');

    expect(messages).toBeInTheDocument();
  });
});