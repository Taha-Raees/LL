"use client"
import React, { useState } from 'react';
import './ReservationForm.scss'; // Import your SCSS file for styling

const ReservationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('1'); // Default to 1 person
  const [errors, setErrors] = useState({}); // Store validation errors

  const validateForm = () => {
    const errors = {};

    // Basic validation examples
    if (!firstName.trim()) {
      errors.firstName = 'First Name is required';
    }
    if (!lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }
    if (!phoneNumber.match(/^\+49\d+/)) {
        errors.phoneNumber = 'Phone Number must start with "+49"';
      }
      
    if (!date) {
      errors.date = 'Date is required';
    }
    if (!time) {
      errors.time = 'Time is required';
    }
    if (!numberOfPeople) {
      errors.numberOfPeople = 'Number of People is required';
    }

    setErrors(errors);

    // Return true if there are no errors, indicating the form is valid
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submitting
    const isValid = validateForm();

    if (isValid) {
      // Send reservation data to the server
      const reservationData = {
        firstName,
        lastName,
        phoneNumber,
        date,
        time,
        numberOfPeople,
      };
      // Send reservationData to the server or perform further processing
    }
  };

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={errors.firstName ? 'error' : ''}
        />
        {errors.firstName && <p className="error-message">{errors.firstName}</p>}
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={errors.lastName ? 'error' : ''}
        />
        {errors.lastName && <p className="error-message">{errors.lastName}</p>}
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className={errors.phoneNumber ? 'error' : ''}
        />
        {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
      </label>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={errors.date ? 'error' : ''}
        />
        {errors.date && <p className="error-message">{errors.date}</p>}
      </label>
      <label>
        Time:
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className={errors.time ? 'error' : ''}
        />
        {errors.time && <p className="error-message">{errors.time}</p>}
      </label>
      <label>
        Number of People:
        <select
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(e.target.value)}
          className={errors.numberOfPeople ? 'error' : ''}
        >
          <option value="1">1 Person</option>
          <option value="2">2 People</option>
          <option value="3">3 People</option>
          {/* Add more options as needed */}
        </select>
        {errors.numberOfPeople && (
          <p className="error-message">{errors.numberOfPeople}</p>
        )}
      </label>
      <button type="submit">Reserve</button>
    </form>
  );
};

export default ReservationForm;

