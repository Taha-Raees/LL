"use client"
import React from 'react'
import { useState } from 'react'
import "./Form.scss";
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import TableBooking from '../TableBooking/TableBooking'
import Confirmation from '../Confirmation/Confirmation'

const Form = () => {
 const [page,setPage]=useState(0);
 const [errors, setErrors] = useState({});
 const [infoErrors, setInfoErrors] = useState({});
 const [formData,setFormData]= useState({
    location:"Select Location",
    time:"",
    date:"",
    numberOfPeople:"1",
 })
 const [infoData,setInfoData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
 })
 
 const FormTitles=["Book A Table", "Personal Info", "Table Booked"];
 const PageDisplay = ()=>{
    if (page===0){
        return <TableBooking handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} errors={errors}/>
    } else if (page===1){
        return<PersonalInfo  handleSubmit={handleSubmit} formData={infoData} setFormData={setInfoData} infoErrors={infoErrors} page={page}/>
    } else{
        return <Confirmation/>
    }
 }

   // Store validation errors
  
   const validateTableForm = () => {
    const errors = {};
  
    // Basic validation examples
    if (!formData.date) {
      errors.date = 'Date is required';
    }
    if (!formData.time) {
      errors.time = 'Time is required';
    }
    if (!formData.numberOfPeople) {
      errors.numberOfPeople = 'Number of People is required';
    }
  
    setErrors(errors);
  
    // Return true if there are no errors, indicating the form is valid
    return Object.keys(errors).length === 0;
  };
  const validateInfoForm = () => {
    const infoErrors = {}; // Change variable name to infoErrors
  
    if (!infoData.firstName.trim()) {
      infoErrors.firstName = 'First Name is required';
    }
    if (!infoData.lastName.trim()) {
      infoErrors.lastName = 'Last Name is required';
    }
    if (!infoData.email.trim()) {
      infoErrors.email = 'Email is required';
    } else if (!isValidEmail(infoData.email)) {
      infoErrors.email = 'Invalid email address';
    }
    if (!infoData.phoneNumber.match(/^\+49\d+/)) {
      infoErrors.phoneNumber = 'Phone Number must start with "+49"';
    }
  
    setInfoErrors(infoErrors); // Change variable name to infoErrors
  
    // Return true if there are no errors, indicating the form is valid
    return Object.keys(infoErrors).length === 0;
  };
  
  // Helper function to validate email
  const isValidEmail = (email) => {
    // Use a regular expression for basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const handleSubmit = (e) => { // Change function name to handleSubmit
    e.preventDefault();
    const isTableValid = validateTableForm();
    const isInfoValid = validateInfoForm();
    if (page === 0 && isTableValid) {
      setPage((currItem) => currItem + 1);
    } if (page === 1 && isInfoValid) {
      setPage((currItem) => currItem + 1);
    }
  };
  

  return (
    <div className="form">
        <div className="formContainer">
            <div className="title">
                <h1>{FormTitles[page]}</h1>
            </div>
            <div className="body">{PageDisplay()}</div>
            <div className="footers">
                <button  hidden={page===2 || page===0}
                onClick={() => {setPage((currItem) => currItem - 1);}}>Prev</button>
                <button type='submit'
                hidden={page===2}
                onClick={handleSubmit}>
                {page === 1?"Confirm" : "Book A Table"}</button>
            </div>
        </div>
    </div>
  )
  }

export default Form