import React from 'react'
import "./TableBooking.scss"
import { useState } from 'react'

const TableBooking = ({formData,setFormData,TableSubmit,errors}) => {
  return (
    <div className="TableBooking">
     <div className="form">
      <form onSubmit={TableSubmit} className="reservation-form">
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
          value={formData.date}
          onChange={(e) => setFormData((prevData) => ({
            ...prevData,
            date: e.target.value
          }))}
          className={errors.date ? 'error' : ''}
        />
        {errors.date && <p className="error-message">{errors.date}</p>}
      </label>
      <label>
        Time:
        <input
          type="time"
          value={formData.time}
          onChange={(e) => setFormData((prevData) => ({
            ...prevData,
            time: e.target.value
          }))}
          className={errors.time ? 'error' : ''}
        />
        {errors.time && <p className="error-message">{errors.time}</p>}
      </label>
      
      <button type="submit">Book a Table</button>
    </form>
    </div>
    </div>
  )
}

export default TableBooking