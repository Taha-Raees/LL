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
        return <TableBooking TableSubmit={TableSubmit} formData={formData} setFormData={setFormData} errors={errors}/>
    } else if (page===1){
        return<PersonalInfo  formData={infoData} setFormData={setInfoData}/>
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
  
  
    const TableSubmit = (e) => {
        e.preventDefault();
                    const isValid = validateTableForm()
                    if(page === 1 && isValid){
                        alert("FORM SUBMITTED")
                        setPage((currItem) => currItem + 1)
                    }else{
                      setPage((currItem) => currItem + 1);}}

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
                <button
                hidden={page===2}
                onClick={TableSubmit}>
                {page === 1?"Confirm" : "Book A Table"}</button>
            </div>
        </div>
    </div>
  )
  }

export default Form