import { fireEvent, render, screen, act } from '@testing-library/react';
import Booking from './Booking';
import { initializeTimes, updateTimes } from './Nav';
import { fetchAPI, submitAPI } from './bookingAPI';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './BookingForm';
import { useReducer } from "react";

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
  expect(initializeTimes()).toStrictEqual({availableTimes: fetchAPI(new Date())})
});

describe('validate updateTimes function', () => {
  const state = initializeTimes();
  test('returns times for date', () => {
    expect(updateTimes(state, {date: "2024-07-20"})).toStrictEqual({availableTimes: fetchAPI(new Date("2024/07/20"))})
  });

  test('returns no times for no date', () => {
    expect(updateTimes(state, {date: ""})).toStrictEqual({availableTimes: fetchAPI(new Date())})
  });
});

describe('check html form validation', () => {
  const availableTimes = [];
  const setAvailableTimes = jest.fn();
  const handleSubmit = jest.fn();
  test('date below min not allowed', () => {
    render(
      <BrowserRouter>
        <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={handleSubmit}/>;
      </BrowserRouter>
    );

    const dateInput = screen.getByLabelText(/Date For Reservation:/);
    fireEvent.change(dateInput, { target: {value: "2024-05-14"} });

    expect(dateInput.validity.valid).toBe(false);
  });

  test('date today and later allowed', () => {
    render(
      <BrowserRouter>
        <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={handleSubmit}/>;
      </BrowserRouter>
    );

    const dateInput = screen.getByLabelText(/Date For Reservation:/);
    fireEvent.change(dateInput, { target: {value: new Date().toISOString().split('T')[0]} });

    expect(dateInput.validity.valid).toBe(true);
  });

  test('only allow at least 1 person', () => {
    render(
      <BrowserRouter>
        <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={handleSubmit}/>;
      </BrowserRouter>
    );

    const numPeopleInput = screen.getByLabelText(/Number of People:/);
    fireEvent.change(numPeopleInput, { target: {value: "0"} });

    expect(numPeopleInput.validity.valid).toBe(false);
  });

  test('only allow at less than 12 people', () => {
    render(
      <BrowserRouter>
        <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={handleSubmit}/>;
      </BrowserRouter>
    );

    const numPeopleInput = screen.getByLabelText(/Number of People:/);
    fireEvent.change(numPeopleInput, { target: {value: "13"} });

    expect(numPeopleInput.validity.valid).toBe(false);
  });

  test('allow between 1 and 12 people', () => {
    render(
      <BrowserRouter>
        <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={handleSubmit}/>;
      </BrowserRouter>
    );

    const numPeopleInput = screen.getByLabelText(/Number of People:/);
    fireEvent.change(numPeopleInput, { target: {value: "10"} });

    expect(numPeopleInput.validity.valid).toBe(true);
  });
})

