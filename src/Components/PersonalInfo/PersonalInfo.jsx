import React from 'react'
import "./PersonalInfo.scss"

const PersonalInfo = ({formData,setFormData}) => {
  return (
    <div className="personalInfo">
      
      <div className="Time">
          <h2>Name</h2>
          <div className="inputItem">
            <input type="text"  placeholder='Name'  value={formData.name} onChange={(e)=> setFormData({...formData, name: e.target.value})} required/>
          </div>
        </div>
        <div className="Time">
          <h2>Surname</h2>
          <div className="inputItem">
            <input type="text"  placeholder='Surname' value={formData.surname} onChange={(e)=> setFormData({...formData, surname: e.target.value})}required/>
          </div>
        </div>
        <div className="Time">
          <h2>Email</h2>
          <div className="inputItem">
            <input type="email"  placeholder='Email Address'value={formData.email} onChange={(e)=> setFormData({...formData, email: e.target.value})} required/>
          </div>
        </div>
        <div className="Time">
          <h2>Phone Number</h2>
          <div className="inputItem">
            <input type="tel"  placeholder='Phone Number'required value={formData.number} onChange={(e)=> setFormData({...formData, number: e.target.value})}/>
          </div>
        </div>
      </div>
    
  )
}

export default PersonalInfo