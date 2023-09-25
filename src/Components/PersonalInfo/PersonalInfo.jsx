import React from 'react'
import "./PersonalInfo.scss"

const PersonalInfo = ({handleSubmit,infoErrors,formData,setFormData,page}) => {
  return (
    <div className="form">
      <form onSubmit={page === 1?handleSubmit: null} className="reservation-form">
      <label>
        First Name:
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) => setFormData((prevData) => ({
            ...prevData,
            firstName: e.target.value
          }))}
          className={infoErrors.firstName ? 'error' : ''}
        />
        {infoErrors.firstName && <p className="error-message">{infoErrors.firstName}</p>}
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) => setFormData((prevData) => ({
            ...prevData,
            lastName: e.target.value
          }))}
          className={infoErrors.lastName ? 'error' : ''}
        />
        {infoErrors.lastName && <p className="error-message">{infoErrors.lastName}</p>}
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) => setFormData((prevData) => ({
            ...prevData,
            phoneNumber: e.target.value
          }))}
          className={infoErrors.phoneNumber ? 'error' : ''}
        />
        {infoErrors.phoneNumber && <p className="error-message">{infoErrors.phoneNumber}</p>}
      </label>
      <label>
        Email:
        <input
          type="text"
          value={formData.email}
          onChange={(e) => setFormData((prevData) => ({
            ...prevData,
            email: e.target.value
          }))}
          className={infoErrors.email ? 'error' : ''}
        />
        {infoErrors.email && <p className="error-message">{infoErrors.email}</p>}
      </label>
    </form>
    </div>
  )
}

export default PersonalInfo