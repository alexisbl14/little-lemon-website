import { render, screen, act } from '@testing-library/react';
import Booking from './Booking';
import { initializeTimes, updateTimes } from './Nav';
import { fetchAPI, submitAPI } from './bookingAPI';
import { BrowserRouter } from 'react-router-dom';

test('renders the BookingForm Heading', () => {
  const availableTimes = [];
  const setAvailableTimes = jest.fn();
  render(
    <BrowserRouter>
      <Booking availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitAPI}/>
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Book a Table");
  expect(headingElement).toBeInTheDocument();
});

test('validate initializeTimes function', () => {
  expect(initializeTimes()).toStrictEqual(fetchAPI(new Date()))
});

describe('validate updateTimes function', () => {
  test('returns times for date', () => {
    expect(updateTimes({date: "2024-07-20"})).toStrictEqual(fetchAPI(new Date("2024/07/20")))
  });

  test('returns no times for no date', () => {
    expect(updateTimes({date: ""})).toStrictEqual(fetchAPI(new Date()))
  });
});

