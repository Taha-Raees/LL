import React from 'react'
import "./TableBooking.scss"
import { useState } from 'react'

const TableBooking = ({formData,setFormData}) => {
  const [errors, setErrors] = useState({}); // Store validation errors

  const validateForm = () => {
    const errors = {};
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
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      const reservationData = {
        date,
        time,
        numberOfPeople,
      };
    }
  };
  return (
    <div className="TableBooking">
     <div className="form">
      <form onSubmit={handleSubmit} className="reservation-form">
      <label>
        Number of People:
        <select
          value={formData.numberOfPeople}
          onChange={(e) => setFormData((prevData) => ({
            ...prevData,
            numberOfPeople: e.target.value
          }))}
          
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
      <label>
        Date:
        <input
          type="date"
          value={formData.Date}
          onChange={(e) => setFormData.date(e.target.value)}
          className={errors.date ? 'error' : ''}
        />
        {errors.date && <p className="error-message">{errors.date}</p>}
      </label>
      <label>
        Time:
        <input
          type="time"
          value={formData.time}
          onChange={(e) => setFormData.time(e.target.value)}
          className={errors.time ? 'error' : ''}
        />
        {errors.time && <p className="error-message">{errors.time}</p>}
      </label>
      
      <button type="submit">Reserve</button>
    </form>
    </div>
    </div>
  )
}

export default TableBooking