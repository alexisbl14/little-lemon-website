import { render, screen, act } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders the BookingForm Heading', () => {
  const availableTimes = [];
  const setAvailableTimes = jest.fn();
  render(<BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>);
  const headingElement = screen.getByText("Book a Table");
  expect(headingElement).toBeInTheDocument();
});
