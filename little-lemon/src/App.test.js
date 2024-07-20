import { render, screen, act } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Nav';

test('renders the BookingForm Heading', () => {
  const availableTimes = [];
  const setAvailableTimes = jest.fn();
  render(<BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>);
  const headingElement = screen.getByText("Book a Table");
  expect(headingElement).toBeInTheDocument();
});

test('validate initializeTimes function', () => {
  expect(initializeTimes()).toStrictEqual([])
});

describe('validate updateTimes function', () => {
  test('returns times for date', () => {
    expect(updateTimes({date: "2024-07-20"})).toStrictEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
  });

  test('returns no times for no date', () => {
    expect(updateTimes({date: ""})).toStrictEqual([])
  });
});

